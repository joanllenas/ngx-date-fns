# ![](./.github/date-fns.png) + ![](./.github/angular-red.png) = ngx-date-fns

[![Build Status](https://travis-ci.org/joanllenas/ngx-date-fns.png?branch=master)](https://travis-ci.org/joanllenas/ngx-date-fns)
[![codecov](https://codecov.io/gh/joanllenas/ngx-date-fns/branch/master/graph/badge.svg)](https://codecov.io/gh/joanllenas/ngx-date-fns)
[![npm version](https://badge.fury.io/js/ngx-date-fns.svg)](https://badge.fury.io/js/ngx-date-fns)
[![Known Vulnerabilities](https://snyk.io/test/github/joanllenas/ngx-date-fns/badge.svg)](https://snyk.io/test/github/joanllenas/ngx-date-fns)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[date-fns](https://date-fns.org/) pipes for Angular 2.0 and above.

## Installation

This library has been tested with [date-fns](https://date-fns.org/) v2.0.1.

```
npm install --save date-fns
npm install --save ngx-date-fns
```

For date-fns v1 support:

```
npm install --save date-fns@1.29.0
npm install --save ngx-date-fns@4.0.3
```

> [ngx-date-fns@4.0.3 docs](https://github.com/joanllenas/ngx-date-fns/tree/v4.0.3)

## Basic Usage

Import `DateFnsModule` into your app's modules:

```typescript
import { DateFnsModule } from 'ngx-date-fns';

@NgModule({
  imports: [
    // (...)
    DateFnsModule.forRoot()
  ]
})
```

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

## Working with locales

> All locale aware pipes use English by default.

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
    { provide: DateFnsConfigurationService, useValue: frenchConfig } // <-- All pipies in French by default
  ]
})
```

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

## Available pipes

> All pipes are pure unless stated otherwise.

#### Format

- [dfnsFormat](https://date-fns.org/v2.0.1/docs/format) _(impure)_
- [dfnsFormatDistance](https://date-fns.org/v2.0.1/docs/formatDistance) _(impure)_
- [dfnsFormatDistanceStrict](https://date-fns.org/v2.0.1/docs/formatDistanceStrict) _(impure)_
- [dfnsFormatDistanceToNow](https://date-fns.org/v2.0.1/docs/formatDistanceToNow) _(impure)_

#### Misc

- [dfnsParse](https://date-fns.org/v2.0.1/docs/parse) _(impure)_
- [dfnsClosestTo](https://date-fns.org/v2.0.1/docs/closestTo)
- [dfnsMin](https://date-fns.org/v2.0.1/docs/min)
- [dfnsMax](https://date-fns.org/v2.0.1/docs/max)

#### Get

- [dfnsGetOverlappingDaysInIntervals](https://date-fns.org/v2.0.1/docs/getOverlappingDaysInIntervals)
- [dfnsGetTime](https://date-fns.org/v2.0.1/docs/getTime)
- [dfnsGetMilliseconds](https://date-fns.org/v2.0.1/docs/getMilliseconds)
- [dfnsGetSeconds](https://date-fns.org/v2.0.1/docs/getSeconds)
- [dfnsGetMinutes](https://date-fns.org/v2.0.1/docs/getMinutes)
- [dfnsGetHours](https://date-fns.org/v2.0.1/docs/getHours)
- [dfnsGetDate](https://date-fns.org/v2.0.1/docs/getDate)
- [dfnsGetDayOfYear](https://date-fns.org/v2.0.1/docs/getDayOfYear)
- [dfnsGetDay](https://date-fns.org/v2.0.1/docs/getDay)
- [dfnsGetISODay](https://date-fns.org/v2.0.1/docs/getISODay)
- [dfnsGetISOWeek](https://date-fns.org/v2.0.1/docs/getISOWeek)
- [dfnsGetDaysInMonth](https://date-fns.org/v2.0.1/docs/getDaysInMonth)
- [dfnsGetMonth](https://date-fns.org/v2.0.1/docs/getMonth)
- [dfnsGetQuarter](https://date-fns.org/v2.0.1/docs/getQuarter)
- [dfnsGetDaysInYear](https://date-fns.org/v2.0.1/docs/getDaysInYear)
- [dfnsGetYear](https://date-fns.org/v2.0.1/docs/getYear)
- [dfnsGetISOWeeksInYear](https://date-fns.org/v2.0.1/docs/getISOWeeksInYear)
- [dfnsGetISOWeekYear](https://date-fns.org/v2.0.1/docs/getISOWeekYear)
- [dfnsGetUnixTime](https://date-fns.org/v2.0.1/docs/getUnixTime)
- [dfnsGetWeek](https://date-fns.org/v2.0.1/docs/getWeek) _(impure)_
- [dfnsGetWeekOfMonth](https://date-fns.org/v2.0.1/docs/getWeekOfMonth) _(impure)_
- [dfnsGetWeeksInMonth](https://date-fns.org/v2.0.1/docs/getWeeksInMonth) _(impure)_
- [dfnsGetDecade](https://date-fns.org/v2.0.1/docs/getDecade)
- [dfnsGetWeekYear](https://date-fns.org/v2.0.1/docs/getWeekYear) _(impure)_

#### Difference

- [dfnsDifferenceInMilliseconds](https://date-fns.org/v2.0.1/docs/differenceInMilliseconds)
- [dfnsDifferenceInSeconds](https://date-fns.org/v2.0.1/docs/differenceInSeconds)
- [dfnsDifferenceInMinutes](https://date-fns.org/v2.0.1/docs/differenceInMinutes)
- [dfnsDifferenceInHours](https://date-fns.org/v2.0.1/docs/differenceInHours)
- [dfnsDifferenceInCalendarDays](https://date-fns.org/v2.0.1/docs/differenceInCalendarDays)
- [dfnsDifferenceInBusinessDays](https://date-fns.org/v2.0.1/docs/differenceInBusinessDays)
- [dfnsDifferenceInDays](https://date-fns.org/v2.0.1/docs/differenceInDays)
- [dfnsDifferenceInCalendarWeeks](https://date-fns.org/v2.0.1/docs/differenceInCalendarWeeks)
- [dfnsDifferenceInWeeks](https://date-fns.org/v2.0.1/docs/differenceInWeeks)
- [dfnsDifferenceInCalendarISOWeeks](https://date-fns.org/v2.0.1/docs/differenceInCalendarISOWeeks)
- [dfnsDifferenceInCalendarMonths](https://date-fns.org/v2.0.1/docs/differenceInCalendarMonths)
- [dfnsDifferenceInMonths](https://date-fns.org/v2.0.1/docs/differenceInMonths)
- [dfnsDifferenceInCalendarQuarters](https://date-fns.org/v2.0.1/docs/differenceInCalendarQuarters)
- [dfnsDifferenceInQuarters](https://date-fns.org/v2.0.1/docs/differenceInQuarters)
- [dfnsDifferenceInCalendarYears](https://date-fns.org/v2.0.1/docs/differenceInCalendarYears)
- [dfnsDifferenceInYears](https://date-fns.org/v2.0.1/docs/differenceInYears)
- [dfnsDifferenceInCalendarISOWeekYears](https://date-fns.org/v2.0.1/docs/differenceInCalendarISOWeekYears)
- [dfnsDifferenceInISOWeekYears](https://date-fns.org/v2.0.1/docs/differenceInISOWeekYears)

#### Add

- [dfnsAddMilliseconds](https://date-fns.org/v2.0.1/docs/addMilliseconds)
- [dfnsAddSeconds](https://date-fns.org/v2.0.1/docs/addSeconds)
- [dfnsAddMinutes](https://date-fns.org/v2.0.1/docs/addMinutes)
- [dfnsAddHours](https://date-fns.org/v2.0.1/docs/addHours)
- [dfnsAddBusinessDays](https://date-fns.org/v2.0.1/docs/addBusinessDays)
- [dfnsAddDays](https://date-fns.org/v2.0.1/docs/addDays)
- [dfnsAddWeeks](https://date-fns.org/v2.0.1/docs/addWeeks)
- [dfnsAddMonths](https://date-fns.org/v2.0.1/docs/addMonths)
- [dfnsAddQuarters](https://date-fns.org/v2.0.1/docs/addQuarters)
- [dfnsAddYears](https://date-fns.org/v2.0.1/docs/addYears)
- [dfnsAddISOWeekYears](https://date-fns.org/v2.0.1/docs/addISOWeekYears)

#### Subtract

- [dfnsSubMilliseconds](https://date-fns.org/v2.0.1/docs/subMilliseconds)
- [dfnsSubSeconds](https://date-fns.org/v2.0.1/docs/subSeconds)
- [dfnsSubMinutes](https://date-fns.org/v2.0.1/docs/subMinutes)
- [dfnsSubHours](https://date-fns.org/v2.0.1/docs/subHours)
- [dfnsSubDays](https://date-fns.org/v2.0.1/docs/subDays)
- [dfnsSubWeeks](https://date-fns.org/v2.0.1/docs/subWeeks)
- [dfnsSubMonths](https://date-fns.org/v2.0.1/docs/subMonths)
- [dfnsSubQuarters](https://date-fns.org/v2.0.1/docs/subQuarters)
- [dfnsSubYears](https://date-fns.org/v2.0.1/docs/subYears)
- [dfnsSubISOWeekYears](https://date-fns.org/v2.0.1/docs/subISOWeekYears)

#### End

- [dfnsEndOfSecond](https://date-fns.org/v2.0.1/docs/endOfSecond)
- [dfnsEndOfMinute](https://date-fns.org/v2.0.1/docs/endOfMinute)
- [dfnsEndOfHour](https://date-fns.org/v2.0.1/docs/endOfHour)
- [dfnsEndOfDay](https://date-fns.org/v2.0.1/docs/endOfDay)
- [dfnsEndOfToday](https://date-fns.org/v2.0.1/docs/endOfToday)
- [dfnsEndOfTomorrow](https://date-fns.org/v2.0.1/docs/endOfTomorrow)
- [dfnsEndOfYesterday](https://date-fns.org/v2.0.1/docs/endOfYesterday)
- [dfnsEndOfWeek](https://date-fns.org/v2.0.1/docs/endOfWeek)
- [dfnsEndOfISOWeek](https://date-fns.org/v2.0.1/docs/endOfISOWeek)
- [dfnsEndOfMonth](https://date-fns.org/v2.0.1/docs/endOfMonth)
- [dfnsEndOfQuarter](https://date-fns.org/v2.0.1/docs/endOfQuarter)
- [dfnsEndOfYear](https://date-fns.org/v2.0.1/docs/endOfYear)
- [dfnsEndOfISOWeekYear](https://date-fns.org/v2.0.1/docs/endOfISOWeekYear)

#### Start

- [dfnsStartOfSecond](https://date-fns.org/v2.0.1/docs/startOfSecond)
- [dfnsStartOfMinute](https://date-fns.org/v2.0.1/docs/startOfMinute)
- [dfnsStartOfHour](https://date-fns.org/v2.0.1/docs/startOfHour)
- [dfnsStartOfDay](https://date-fns.org/v2.0.1/docs/startOfDay)
- [dfnsStartOfToday](https://date-fns.org/v2.0.1/docs/startOfToday)
- [dfnsStartOfTomorrow](https://date-fns.org/v2.0.1/docs/startOfTomorrow)
- [dfnsStartOfYesterday](https://date-fns.org/v2.0.1/docs/startOfYesterday)
- [dfnsStartOfWeek](https://date-fns.org/v2.0.1/docs/startOfWeek) _(impure)_
- [dfnsStartOfISOWeek](https://date-fns.org/v2.0.1/docs/startOfISOWeek)
- [dfnsStartOfMonth](https://date-fns.org/v2.0.1/docs/startOfMonth)
- [dfnsStartOfQuarter](https://date-fns.org/v2.0.1/docs/startOfQuarter)
- [dfnsStartOfYear](https://date-fns.org/v2.0.1/docs/startOfYear)
- [dfnsStartOfISOWeekYear](https://date-fns.org/v2.0.1/docs/startOfISOWeekYear)
- [dfnsStartOfDecade](https://date-fns.org/v2.0.1/docs/startOfDecade)
- [dfnsStartOfWeekYear](https://date-fns.org/v2.0.1/docs/startOfWeekYear) _(impure)_

#### Last Day Of

- [dfnsLastDayOfWeek](https://date-fns.org/v2.0.1/docs/lastDayOfWeek) _(impure)_
- [dfnsLastDayOfISOWeek](https://date-fns.org/v2.0.1/docs/lastDayOfISOWeek)
- [dfnsLastDayOfMonth](https://date-fns.org/v2.0.1/docs/lastDayOfMonth)
- [dfnsLastDayOfQuarter](https://date-fns.org/v2.0.1/docs/lastDayOfQuarter)
- [dfnsLastDayOfYear](https://date-fns.org/v2.0.1/docs/lastDayOfYear)
- [dfnsLastDayOfISOWeekYear](https://date-fns.org/v2.0.1/docs/lastDayOfISOWeekYear)
- [dfnsLastDayOfDecade](https://date-fns.org/v2.0.1/docs/lastDayOfDecade)

#### Is...?

- [dfnsIsAfter](https://date-fns.org/v2.0.1/docs/isAfter)
- [dfnsIsBefore](https://date-fns.org/v2.0.1/docs/isBefore)
- [dfnsIsDate](https://date-fns.org/v2.0.1/docs/isDate)
- [dfnsIsEqual](https://date-fns.org/v2.0.1/docs/isEqual)
- [dfnsIsFuture](https://date-fns.org/v2.0.1/docs/isFuture)
- [dfnsIsPast](https://date-fns.org/v2.0.1/docs/isPast)
- [dfnsIsValid](https://date-fns.org/v2.0.1/docs/isValid)
- [dfnsIsToday](https://date-fns.org/v2.0.1/docs/isToday)
- [dfnsIsWeekend](https://date-fns.org/v2.0.1/docs/isWeekend)
- [dfnsIsSameMonth](https://date-fns.org/v2.0.1/docs/isSameMonth)
- [dfnsIsSameYear](https://date-fns.org/v2.0.1/docs/isSameYear)

## Utils

A collection of utilities built around date-fns functions.

### dfnsWeekdayName _(impure)_

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
