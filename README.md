# ![](./.github/date-fns.png) + ![](./.github/angular-red.png) = ngx-date-fns

[![Build Status](https://travis-ci.org/joanllenas/ngx-date-fns.png?branch=master)](https://travis-ci.org/joanllenas/ngx-date-fns)
[![codecov](https://codecov.io/gh/joanllenas/ngx-date-fns/branch/master/graph/badge.svg)](https://codecov.io/gh/joanllenas/ngx-date-fns)
[![npm version](https://badge.fury.io/js/ngx-date-fns.svg)](https://badge.fury.io/js/ngx-date-fns)
[![Known Vulnerabilities](https://snyk.io/test/github/joanllenas/ngx-date-fns/badge.svg)](https://snyk.io/test/github/joanllenas/ngx-date-fns)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[date-fns](https://date-fns.org/) pipes for Angular 2.0 and above.

## Table Of Contents

- [Installation](#installation)
- [date-fns v1 support](#v1-support)
- [Basic Usage](#usage)
- [Working with locales](#locales)
  - [Changing locale globally](#locale-globally)
  - [Changing locale at runtime](#locale-runtime)
  - [_Pure_ or _impure_?](#pure-impure)
- [Tree shaking date-fns](#tree-shaking)
- [Available pipes 📚](#pipes)
  - [Misc. pipes](#misc-pipes)
  - [Format... pipes](#format-pipes)
  - [Get... pipes](#get-pipes)
  - [Difference... pipes](#difference-pipes)
  - [Add... pipes](#add-pipes)
  - [Subtract... pipes](#subtract-pipes)
  - [End... pipes](#end-pipes)
  - [Start... pipes](#start-pipes)
  - [Last day of... pipes](#last-day-of-pipes)
  - [Is... pipes](#is-pipes)
- [Utils](#utils)

<a name="installation" />

## Installation

This library requires [date-fns](https://date-fns.org/) `>= v2.16.0`.

- `npm install --save date-fns`
- `npm install --save ngx-date-fns`

<a name="v1-support" />

#### date-fns v1 support

- `npm install --save date-fns@1.29.0`
- `npm install --save ngx-date-fns@4.0.3`
- [ngx-date-fns@4.0.3 docs](https://github.com/joanllenas/ngx-date-fns/tree/v4.0.3)

<a name="usage" />

## Basic Usage

Import `DateFnsModule` into your app's module:

```typescript
import { DateFnsModule } from 'ngx-date-fns';

@NgModule({
  imports: [
    // (...)
    DateFnsModule.forRoot()
  ]
})
```

> In lazy loaded module declarations use `imports: [DateFnsModule]`.

```typescript
import { Component } from '@angular/core';
import { es } from 'date-fns/locale';

@Component({
  selector: 'my-component',
  template: `
    <p>{{ dateOne | dfnsFormat: 'yyyy/MM/dd' }}</p>
    <p>{{ [dateOne, dateTwo] | dfnsMin }}</p>
    <p>{{ [dateOne, dateTwo] | dfnsMax | dfnsFormat: 'EEE LLL d yyyy' }}</p>
    <p>{{ dateThree | dfnsFormatDistanceToNow: options }}</p>
  `
})
export class AppComponent {
  dateOne = new Date(2016, 0, 1);
  dateTwo = new Date(2017, 0, 1);
  dateThree: Date;
  options = {
    locale: es,
    addSuffix: true
  };
  constructor() {
    this.dateThree = new Date();
    this.dateThree.setDate(this.dateThree.getDate() - 6);
  }
}
```

The output:

```
2016/01/01

Fri Jan 01 2016 00:00:00 GMT+0100 (Central European Standard Time)

Sun January 1 2017

hace 6 días
```

<a name="locales" />

## Working with locales

> All locale-aware pipes use English by default.

<a name="locale-globally" />

### Changing locale globally

Instead of passing the locale to each pipe via `options` you can set it globally in one single step by overriding the default `DateFnsConfiguration` implementation:

```typescript
import { DateFnsModule } from 'ngx-date-fns';
import { fr } from "date-fns/locale";

const frenchConfig = new DateFnsConfigurationService();
frenchConfig.setLocale(fr);

@NgModule({
  imports: [
    // (...)
    DateFnsModule.forRoot()
  ],
  providers: [
    // (...)
    { provide: DateFnsConfigurationService, useValue: frenchConfig } // <-- All pipes in French by default
  ]
})
```

<a name="locale-runtime" />

### Changing locale at runtime

It is also possible to change the default locale at runtime:

```typescript
import { Component } from '@angular/core';
import { DateFnsConfigurationService } from '../lib/src/date-fns-configuration.service';
import { es, de } from 'date-fns/locale';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ dateOne | dfnsFormat: 'MM/dd/yyyy' }}</p>
    <hr />
    Set default locale to: <a href="#" (click)="changeToGerman()">German</a>,
    <a href="#" (click)="changeToSpanish()">Spanish</a>.
  `
})
export class AppComponent {
  dateOne = new Date(2016, 0, 1);
  constructor(public config: DateFnsConfigurationService) {}
  changeToGerman() {
    this.config.setLocale(de);
  }
  changeToSpanish() {
    this.config.setLocale(es);
  }
}
```

<a name="pure-impure" />

### _Pure_ or _impure_?

Should I use the _pure_ or _impure_ version of the locale-aware pipes?

The answer is quite simple:

- Do you set the locale only once when the application starts?
  - Use only _pure_ pipes.
- Do you need to change the locale at runtime?
  - Use _impure_ pipes.

The main difference is that _pure_ pipes do not get notified when the locale is changed via `DateFnsConfiguration.setLocale(locale: Locale)`, because the instance is not kept in memory. Impure _pipes_, on the other hand, are kept in memory and listen for Locale change notifications, which adds some memory and performance overhead.

<a name="tree-shaking" />

## Tree shaking date-fns

The library itself is optimized to be tree-shakable by just importing `DateFnsModule.forRoot()` or selectively import pipes by calling them from `ngx-date-fns` package itself, as those were exported following the [SCAM structure](https://indepth.dev/emulating-tree-shakable-components-using-single-component-angular-modules/#creating-a-scam-for-the-capitalize-pipe), for example:

```typescript
// app.module.ts
import { fr } from 'date-fns/locale';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import {
  FormatPipeModule,
  MinPipeModule,
  MaxPipeModule,
  FormatDistanceToNowPipeModule,
  WeekdayNamePipeModule,
  ParsePipeModule
} from 'ngx-date-fns';

const frenchConfig = new DateFnsConfigurationService();
frenchConfig.setLocale(fr);

@NgModule({
  // ... other module stuff
  imports: [
    // Selectively import
    FormatPipeModule,
    MinPipeModule,
    MaxPipeModule,
    FormatDistanceToNowPipeModule,
    WeekdayNamePipeModule,
    ParsePipeModule
  ],
  providers: [{ provide: DateFnsConfigurationService, useValue: frenchConfig }]
})
export class AppModule {}
```

You can test this by downloading this repo and running:

```
npm run analyze:app
```

This command will load a file in your browser where you will see that `date-fns` takes `63Kb`, which is significantly less than the `286Kb` of the whole library without tree shaking applied. (this, of course, will be much less after gzipping).

Also take into account that locale files tend to increase the final bundle size of `date-fns` as well.

<a name="pipes" />

## Available pipes

> All pipes are pure unless stated otherwise.

<a name="misc-pipes" />

#### Misc

- [dfnsParse](https://date-fns.org/v2.16.0/docs/parse) _([impure](#pure-or-impure))_
  - [dfnsParsePure](https://date-fns.org/v2.16.0/docs/parse)
- [dfnsParseIso](https://date-fns.org/v2.16.0/docs/parseISO)
- [dfnsClosestTo](https://date-fns.org/v2.16.0/docs/closestTo)
- [dfnsMin](https://date-fns.org/v2.16.0/docs/min)
- [dfnsMax](https://date-fns.org/v2.16.0/docs/max)

<a name="format-pipes" />

#### Format

> Since `v7.0.0` invalid Dates will return an empty string instead of throwing an exception.

- [dfnsFormat](https://date-fns.org/v2.16.0/docs/format) _([impure](#pure-or-impure))_
  - [dfnsFormatPure](https://date-fns.org/v2.16.0/docs/format)
- [dfnsFormatDistance](https://date-fns.org/v2.16.0/docs/formatDistance) _([impure](#pure-or-impure))_
  - [dfnsFormatDistancePure](https://date-fns.org/v2.16.0/docs/formatDistance)
- [dfnsFormatDistanceStrict](https://date-fns.org/v2.16.0/docs/formatDistanceStrict) _([impure](#pure-or-impure))_
  - [dfnsFormatDistanceStrictPure](https://date-fns.org/v2.16.0/docs/formatDistanceStrict)
- [dfnsFormatDistanceToNow](https://date-fns.org/v2.16.0/docs/formatDistanceToNow) _([impure](#pure-or-impure))_
  - [dfnsFormatDistanceToNowPure](https://date-fns.org/v2.16.0/docs/formatDistanceToNow)
- [dfnsFormatDuration](https://date-fns.org/v2.16.0/docs/formatDuration) _([impure](#pure-or-impure))_
  - [dfnsFormatDurationPure](https://date-fns.org/v2.16.0/docs/formatDuration)

<a name="get-pipes" />

#### Get

- [dfnsGetOverlappingDaysInIntervals](https://date-fns.org/v2.16.0/docs/getOverlappingDaysInIntervals)
- [dfnsGetTime](https://date-fns.org/v2.16.0/docs/getTime)
- [dfnsGetMilliseconds](https://date-fns.org/v2.16.0/docs/getMilliseconds)
- [dfnsGetSeconds](https://date-fns.org/v2.16.0/docs/getSeconds)
- [dfnsGetMinutes](https://date-fns.org/v2.16.0/docs/getMinutes)
- [dfnsGetHours](https://date-fns.org/v2.16.0/docs/getHours)
- [dfnsGetDate](https://date-fns.org/v2.16.0/docs/getDate)
- [dfnsGetDayOfYear](https://date-fns.org/v2.16.0/docs/getDayOfYear)
- [dfnsGetDay](https://date-fns.org/v2.16.0/docs/getDay)
- [dfnsGetISODay](https://date-fns.org/v2.16.0/docs/getISODay)
- [dfnsGetISOWeek](https://date-fns.org/v2.16.0/docs/getISOWeek)
- [dfnsGetDaysInMonth](https://date-fns.org/v2.16.0/docs/getDaysInMonth)
- [dfnsGetMonth](https://date-fns.org/v2.16.0/docs/getMonth)
- [dfnsGetQuarter](https://date-fns.org/v2.16.0/docs/getQuarter)
- [dfnsGetDaysInYear](https://date-fns.org/v2.16.0/docs/getDaysInYear)
- [dfnsGetYear](https://date-fns.org/v2.16.0/docs/getYear)
- [dfnsGetISOWeeksInYear](https://date-fns.org/v2.16.0/docs/getISOWeeksInYear)
- [dfnsGetISOWeekYear](https://date-fns.org/v2.16.0/docs/getISOWeekYear)
- [dfnsGetUnixTime](https://date-fns.org/v2.16.0/docs/getUnixTime)
- [dfnsGetWeek](https://date-fns.org/v2.16.0/docs/getWeek) _([impure](#pure-or-impure))_
  - [dfnsGetWeekPure](https://date-fns.org/v2.16.0/docs/getWeek)
- [dfnsGetWeekOfMonth](https://date-fns.org/v2.16.0/docs/getWeekOfMonth) _([impure](#pure-or-impure))_
  - [dfnsGetWeekOfMonthPure](https://date-fns.org/v2.16.0/docs/getWeekOfMonth)
- [dfnsGetWeeksInMonth](https://date-fns.org/v2.16.0/docs/getWeeksInMonth) _([impure](#pure-or-impure))_
  - [dfnsGetWeeksInMonthPure](https://date-fns.org/v2.16.0/docs/getWeeksInMonth)
- [dfnsGetDecade](https://date-fns.org/v2.16.0/docs/getDecade)
- [dfnsGetWeekYear](https://date-fns.org/v2.16.0/docs/getWeekYear) _([impure](#pure-or-impure))_
  - [dfnsGetWeekYearPure](https://date-fns.org/v2.16.0/docs/getWeekYear)

<a name="difference-pipes" />

#### Difference

- [dfnsDifferenceInMilliseconds](https://date-fns.org/v2.16.0/docs/differenceInMilliseconds)
- [dfnsDifferenceInSeconds](https://date-fns.org/v2.16.0/docs/differenceInSeconds)
- [dfnsDifferenceInMinutes](https://date-fns.org/v2.16.0/docs/differenceInMinutes)
- [dfnsDifferenceInHours](https://date-fns.org/v2.16.0/docs/differenceInHours)
- [dfnsDifferenceInCalendarDays](https://date-fns.org/v2.16.0/docs/differenceInCalendarDays)
- [dfnsDifferenceInBusinessDays](https://date-fns.org/v2.16.0/docs/differenceInBusinessDays)
- [dfnsDifferenceInDays](https://date-fns.org/v2.16.0/docs/differenceInDays)
- [dfnsDifferenceInCalendarWeeks](https://date-fns.org/v2.16.0/docs/differenceInCalendarWeeks)
- [dfnsDifferenceInWeeks](https://date-fns.org/v2.16.0/docs/differenceInWeeks)
- [dfnsDifferenceInCalendarISOWeeks](https://date-fns.org/v2.16.0/docs/differenceInCalendarISOWeeks)
- [dfnsDifferenceInCalendarMonths](https://date-fns.org/v2.16.0/docs/differenceInCalendarMonths)
- [dfnsDifferenceInMonths](https://date-fns.org/v2.16.0/docs/differenceInMonths)
- [dfnsDifferenceInCalendarQuarters](https://date-fns.org/v2.16.0/docs/differenceInCalendarQuarters)
- [dfnsDifferenceInQuarters](https://date-fns.org/v2.16.0/docs/differenceInQuarters)
- [dfnsDifferenceInCalendarYears](https://date-fns.org/v2.16.0/docs/differenceInCalendarYears)
- [dfnsDifferenceInYears](https://date-fns.org/v2.16.0/docs/differenceInYears)
- [dfnsDifferenceInCalendarISOWeekYears](https://date-fns.org/v2.16.0/docs/differenceInCalendarISOWeekYears)
- [dfnsDifferenceInISOWeekYears](https://date-fns.org/v2.16.0/docs/differenceInISOWeekYears)

<a name="add-pipes" />

#### Add

- [dfnsAddMilliseconds](https://date-fns.org/v2.16.0/docs/addMilliseconds)
- [dfnsAddSeconds](https://date-fns.org/v2.16.0/docs/addSeconds)
- [dfnsAddMinutes](https://date-fns.org/v2.16.0/docs/addMinutes)
- [dfnsAddHours](https://date-fns.org/v2.16.0/docs/addHours)
- [dfnsAddBusinessDays](https://date-fns.org/v2.16.0/docs/addBusinessDays)
- [dfnsAddDays](https://date-fns.org/v2.16.0/docs/addDays)
- [dfnsAddWeeks](https://date-fns.org/v2.16.0/docs/addWeeks)
- [dfnsAddMonths](https://date-fns.org/v2.16.0/docs/addMonths)
- [dfnsAddQuarters](https://date-fns.org/v2.16.0/docs/addQuarters)
- [dfnsAddYears](https://date-fns.org/v2.16.0/docs/addYears)
- [dfnsAddISOWeekYears](https://date-fns.org/v2.16.0/docs/addISOWeekYears)

<a name="subtract-pipes" />

#### Subtract

- [dfnsSubMilliseconds](https://date-fns.org/v2.16.0/docs/subMilliseconds)
- [dfnsSubSeconds](https://date-fns.org/v2.16.0/docs/subSeconds)
- [dfnsSubMinutes](https://date-fns.org/v2.16.0/docs/subMinutes)
- [dfnsSubHours](https://date-fns.org/v2.16.0/docs/subHours)
- [dfnsSubDays](https://date-fns.org/v2.16.0/docs/subDays)
- [dfnsSubWeeks](https://date-fns.org/v2.16.0/docs/subWeeks)
- [dfnsSubMonths](https://date-fns.org/v2.16.0/docs/subMonths)
- [dfnsSubQuarters](https://date-fns.org/v2.16.0/docs/subQuarters)
- [dfnsSubYears](https://date-fns.org/v2.16.0/docs/subYears)
- [dfnsSubISOWeekYears](https://date-fns.org/v2.16.0/docs/subISOWeekYears)

<a name="end-pipes" />

#### End

- [dfnsEndOfSecond](https://date-fns.org/v2.16.0/docs/endOfSecond)
- [dfnsEndOfMinute](https://date-fns.org/v2.16.0/docs/endOfMinute)
- [dfnsEndOfHour](https://date-fns.org/v2.16.0/docs/endOfHour)
- [dfnsEndOfDay](https://date-fns.org/v2.16.0/docs/endOfDay)
- [dfnsEndOfToday](https://date-fns.org/v2.16.0/docs/endOfToday)
- [dfnsEndOfTomorrow](https://date-fns.org/v2.16.0/docs/endOfTomorrow)
- [dfnsEndOfYesterday](https://date-fns.org/v2.16.0/docs/endOfYesterday)
- [dfnsEndOfWeek](https://date-fns.org/v2.16.0/docs/endOfWeek)
- [dfnsEndOfISOWeek](https://date-fns.org/v2.16.0/docs/endOfISOWeek)
- [dfnsEndOfMonth](https://date-fns.org/v2.16.0/docs/endOfMonth)
- [dfnsEndOfQuarter](https://date-fns.org/v2.16.0/docs/endOfQuarter)
- [dfnsEndOfYear](https://date-fns.org/v2.16.0/docs/endOfYear)
- [dfnsEndOfISOWeekYear](https://date-fns.org/v2.16.0/docs/endOfISOWeekYear)

<a name="start-pipes" />

#### Start

- [dfnsStartOfSecond](https://date-fns.org/v2.16.0/docs/startOfSecond)
- [dfnsStartOfMinute](https://date-fns.org/v2.16.0/docs/startOfMinute)
- [dfnsStartOfHour](https://date-fns.org/v2.16.0/docs/startOfHour)
- [dfnsStartOfDay](https://date-fns.org/v2.16.0/docs/startOfDay)
- [dfnsStartOfToday](https://date-fns.org/v2.16.0/docs/startOfToday)
- [dfnsStartOfTomorrow](https://date-fns.org/v2.16.0/docs/startOfTomorrow)
- [dfnsStartOfYesterday](https://date-fns.org/v2.16.0/docs/startOfYesterday)
- [dfnsStartOfWeek](https://date-fns.org/v2.16.0/docs/startOfWeek) _([impure](#pure-or-impure))_
  - [dfnsStartOfWeekPure](https://date-fns.org/v2.16.0/docs/startOfWeek)
- [dfnsStartOfISOWeek](https://date-fns.org/v2.16.0/docs/startOfISOWeek)
- [dfnsStartOfMonth](https://date-fns.org/v2.16.0/docs/startOfMonth)
- [dfnsStartOfQuarter](https://date-fns.org/v2.16.0/docs/startOfQuarter)
- [dfnsStartOfYear](https://date-fns.org/v2.16.0/docs/startOfYear)
- [dfnsStartOfISOWeekYear](https://date-fns.org/v2.16.0/docs/startOfISOWeekYear)
- [dfnsStartOfDecade](https://date-fns.org/v2.16.0/docs/startOfDecade)
- [dfnsStartOfWeekYear](https://date-fns.org/v2.16.0/docs/startOfWeekYear) _([impure](#pure-or-impure))_
  - [dfnsStartOfWeekYearPure](https://date-fns.org/v2.16.0/docs/startOfWeekYear)

<a name="last-day-of-pipes" />

#### Last Day Of

- [dfnsLastDayOfWeek](https://date-fns.org/v2.16.0/docs/lastDayOfWeek) _([impure](#pure-or-impure))_
  - [dfnsLastDayOfWeekPure](https://date-fns.org/v2.16.0/docs/lastDayOfWeek)
- [dfnsLastDayOfISOWeek](https://date-fns.org/v2.16.0/docs/lastDayOfISOWeek)
- [dfnsLastDayOfMonth](https://date-fns.org/v2.16.0/docs/lastDayOfMonth)
- [dfnsLastDayOfQuarter](https://date-fns.org/v2.16.0/docs/lastDayOfQuarter)
- [dfnsLastDayOfYear](https://date-fns.org/v2.16.0/docs/lastDayOfYear)
- [dfnsLastDayOfISOWeekYear](https://date-fns.org/v2.16.0/docs/lastDayOfISOWeekYear)
- [dfnsLastDayOfDecade](https://date-fns.org/v2.16.0/docs/lastDayOfDecade)

<a name="is-pipes" />

#### Is...?

- [dfnsIsAfter](https://date-fns.org/v2.16.0/docs/isAfter)
- [dfnsIsBefore](https://date-fns.org/v2.16.0/docs/isBefore)
- [dfnsIsDate](https://date-fns.org/v2.16.0/docs/isDate)
- [dfnsIsEqual](https://date-fns.org/v2.16.0/docs/isEqual)
- [dfnsIsFuture](https://date-fns.org/v2.16.0/docs/isFuture)
- [dfnsIsPast](https://date-fns.org/v2.16.0/docs/isPast)
- [dfnsIsValid](https://date-fns.org/v2.16.0/docs/isValid)
- [dfnsIsToday](https://date-fns.org/v2.16.0/docs/isToday)
- [dfnsIsWeekend](https://date-fns.org/v2.16.0/docs/isWeekend)
- [dfnsIsSameMonth](https://date-fns.org/v2.16.0/docs/isSameMonth)
- [dfnsIsSameYear](https://date-fns.org/v2.16.0/docs/isSameYear)

<a name="utils" />

## Utils

A collection of utilities built around date-fns functions.

### dfnsWeekdayName

> This pipe is ([impure](#pure-or-impure))

Given a weekday number, returns its name.

#### @param `WeekdayNameFormat`

Optional weekday format. Allowed values are:

- `x1`: One char. 'M' for Monday.
- `x2`: Two chars. 'Mo' for Monday.
- `x3`: Three chars. 'Mon' for Monday.
- `full`: Full weekday name. 'Monday' for Monday.

Defaults to `full`.

#### @param `Locale`

Optional date-fns `Locale` object.

Optional locale object.

#### Basic example

```html
<div>
  <!-- Prints Monday -->
  {{ 0 | dfnsWeekdayName }}
</div>
<div>
  <!-- Prints Mon -->
  {{ 0 | dfnsWeekdayName : 'x3' }}
</div>
```
