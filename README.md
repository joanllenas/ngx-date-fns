# ![](./.github/14921202.png) + ![](.github/icon_angular_gradient.png) = ngx-date-fns

[![Checks](https://github.com/joanllenas/ngx-date-fns/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/joanllenas/ngx-date-fns/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/joanllenas/ngx-date-fns/branch/master/graph/badge.svg)](https://codecov.io/gh/joanllenas/ngx-date-fns)
[![npm version](https://badge.fury.io/js/ngx-date-fns.svg)](https://badge.fury.io/js/ngx-date-fns)
[![npm downloads](https://img.shields.io/npm/dm/ngx-date-fns)](https://www.npmjs.com/package/ngx-date-fns)

[date-fns](https://date-fns.org/) pipes for Angular applications.

## Table Of Contents

- [Requirements](#requirements)
- [Installation](#installation)
  - [date-fns v4 support](#installation)
  - [date-fns v3 support](#v3-support)
  - [date-fns v2 support](#v2-support)
  - [date-fns v1 support](#v1-support)
- [Issues / feature requests](#issues-and-feat-reqs)
- [Contributing](#contributing)
- [Basic Usage](#usage)
- [Importing pipes](#importing-pipes)
- [Working with locales](#locales)
  - [Changing locale globally](#locale-globally)
  - [Changing locale at runtime](#locale-runtime)
- [_Pure_ or _impure_?](#pure-impure)
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

<a name="requirements" />

## Requirements

The latest version of this library requires:

- [date-fns](https://date-fns.org/) `= v4.x.x`.
- Angular `>= v21.0.0`.

| Angular      | ngx-date-fns |
| ------------ | ------------ |
| 21 and newer | 13.x         |
| 17 to 20     | 12.x         |

For Angular 17 to 20, install ngx-date-fns 12 with `npm install --save ngx-date-fns@12`. See the [ngx-date-fns@12.1.0 docs](https://github.com/joanllenas/ngx-date-fns/tree/v12.1.0).

<a name="installation" />

## Installation

- `npm install --save date-fns`
- `npm install --save ngx-date-fns`

<a name="v3-support" />

#### Installation for date-fns v3

- `npm install --save date-fns@3.6.0`
- `npm install --save ngx-date-fns@11.0.1`
- [ngx-date-fns@11.0.1 docs](https://github.com/joanllenas/ngx-date-fns/tree/v11.0.1)

<a name="v2-support" />

#### Installation for date-fns v2

- `npm install --save date-fns@2.30.0`
- `npm install --save ngx-date-fns@10.0.1`
- [ngx-date-fns@10.0.1 docs](https://github.com/joanllenas/ngx-date-fns/tree/v10.0.1)

> ⚠️ There's a range of date-fns versions for which _tree shaking_ is broken, so we recommend that you either install `v2.16.1` or `>= v2.21.1`.

<a name="v1-support" />

#### Installation for date-fns v1

- `npm install --save date-fns@1.29.0`
- `npm install --save ngx-date-fns@4.0.3`
- [ngx-date-fns@4.0.3 docs](https://github.com/joanllenas/ngx-date-fns/tree/v4.0.3)

<a name="issues-and-feat-reqs" />

## Issues and Feature Requests

This library has been around for more than 8 years and is largely complete, so don’t expect frequent new releases. If you notice missing functionality or encounter a bug, though, don’t hesitate to visit https://github.com/joanllenas/ngx-date-fns/issues and open an issue!

<a name="contributing" />

## Contributing

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/). When a pull request is merged into `master`, CI reads the commit messages since the last release, publishes the new version to npm, and creates the GitHub release:

- `fix:` releases a patch version.
- `feat:` releases a minor version.
- A `BREAKING CHANGE:` footer releases a major version.
- Other types, such as `docs:`, `test:` and `ci:`, do not release.

When a pull request is squash merged, its title becomes the commit message, so the title must use the same format.

<a name="usage" />

## Basic Usage

> [stackblitz example](https://stackblitz.com/edit/stackblitz-starters-eonlzk?file=src%2Fmain.ts)

```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { es } from 'date-fns/locale';
import { DateFnsModule } from 'ngx-date-fns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DateFnsModule],
  template: `
    <p>{{ dateOne | dfnsFormat: 'MM/dd/yyyy' }}</p>
    <p>{{ [dateOne, dateTwo] | dfnsMin | dfnsFormat: 'EEE LLLL d yyyy' }}</p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMax | dfnsFormat: 'EEE LLLL d yyyy' }}
    </p>
    <p>
      {{ dateThree | dfnsFormatDistanceToNow: options }} - (Explicit 'es'
      locale)
    </p>
    <p>{{ 0 | dfnsWeekdayName: 'full':options }} - (Explicit 'es' locale)</p>
    <p>
      {{
        '12 de Marzo'
          | dfnsParse: parseFormat:parseDate:parseLocale
          | dfnsFormat: 'MM/dd/yyyy'
      }}
    </p>
  `
})
export class App {
  dateOne = new Date(2016, 0, 1);
  dateTwo = new Date(2017, 0, 1);
  dateThree: Date;
  options = {
    locale: es,
    addSuffix: true
  };
  parseDate = new Date(2010, 0, 1);
  parseFormat = `do 'de' MMMM`;
  parseLocale = { locale: es };

  constructor() {
    this.dateThree = new Date();
    this.dateThree.setDate(this.dateThree.getDate() - 6);
  }
}

bootstrapApplication(App);
```

The output:

```
01/01/2016
Fri January 1 2016
Sun January 1 2017
hace 6 días - (Explicit 'es' locale)
lunes - (Explicit 'es' locale)
03/12/2010
```

<a name="importing-pipes" />

## Importing pipes

There are two ways to import the pipes:

- **Standalone pipes (recommended).** Import only the pipes that you use. The class name of a pipe is its name without the `dfns` prefix, plus `Pipe`. For example, the class of `dfnsFormatDistanceToNow` is `FormatDistanceToNowPipe`.
- **`DateFnsModule`.** It exports all pipes.

```typescript
import { Component } from '@angular/core';
import { AddDaysPipe, FormatPipe } from 'ngx-date-fns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddDaysPipe, FormatPipe],
  template: `<p>{{ date | dfnsAddDays: 1 | dfnsFormat: 'yyyy-MM-dd' }}</p>`
})
export class App {
  date = new Date(2016, 0, 1);
}
```

Standalone pipes also work in an NgModule. Add them to the `imports` array of the NgModule.

ngx-date-fns v13 removed the per-pipe modules, such as `FormatPipeModule`. Replace each module with its standalone pipe, for example `FormatPipeModule` -> `FormatPipe`.

<a name="locales" />

## Working with locales

> All locale-aware pipes use English by default.

<a name="locale-globally" />

### Changing locale globally

Instead of passing the locale to each pipe via `options` you can set it globally in one single step by overriding the default `DateFnsConfiguration` implementation:

> [stackblitz example](https://stackblitz.com/edit/stackblitz-starters-za1fa7?file=src%2Fmain.ts)

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { fr } from 'date-fns/locale';

const frenchConfig = new DateFnsConfigurationService();
frenchConfig.setLocale(fr);

export const appConfig: ApplicationConfig = {
  providers: [{ provide: DateFnsConfigurationService, useValue: frenchConfig }]
};
```

```typescript
// main.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { es } from 'date-fns/locale';
import { DateFnsModule } from 'ngx-date-fns';
import { appConfig } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DateFnsModule],
  template: `
    (...)
  `
})
export class App {
  // (...)
}

bootstrapApplication(App, appConfig).catch(err => console.error(err));
```

<a name="locale-runtime" />

### Changing locale at runtime

It is also possible to change the default locale at runtime:

> [stackblitz example](https://stackblitz.com/edit/stackblitz-starters-6rbpwc?file=src%2Fmain.ts)

```typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { es, de } from 'date-fns/locale';
import { DateFnsConfigurationService, DateFnsModule } from 'ngx-date-fns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DateFnsModule],
  template: `
    <p>{{ dateOne | dfnsFormat: 'EEE LLLL d yyyy' }}</p>
    <hr />
    Set default locale to: <a href="#" (click)="changeToGerman()">German</a>,
    <a href="#" (click)="changeToSpanish()">Spanish</a>.
  `
})
export class App {
  dateOne = new Date(2016, 0, 1);
  constructor(public config: DateFnsConfigurationService) {}
  changeToGerman() {
    this.config.setLocale(de);
  }
  changeToSpanish() {
    this.config.setLocale(es);
  }
}

bootstrapApplication(App);
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

<a name="pipes" />

## Available pipes

> All pipes are pure unless stated otherwise.

<a name="misc-pipes" />

#### Misc

- [dfnsParse](https://date-fns.org/docs/parse) _([impure](#pure-or-impure))_
  - [dfnsParsePure](https://date-fns.org/docs/parse)
- [dfnsParseIso](https://date-fns.org/docs/parseISO)
- [dfnsClosestTo](https://date-fns.org/docs/closestTo)
- [dfnsMin](https://date-fns.org/docs/min)
- [dfnsMax](https://date-fns.org/docs/max)

<a name="format-pipes" />

#### Format

> Since `v7.0.0` invalid Dates will return an empty string instead of throwing an exception.

- [dfnsFormat](https://date-fns.org/docs/format) _([impure](#pure-or-impure))_
  - [dfnsFormatPure](https://date-fns.org/docs/format)
- [dfnsFormatRelative](https://date-fns.org/docs/formatRelative) _([impure](#pure-or-impure))_
  - [dfnsFormatRelativePure](https://date-fns.org/docs/formatRelative)
- [dfnsFormatDistance](https://date-fns.org/docs/formatDistance) _([impure](#pure-or-impure))_
  - [dfnsFormatDistancePure](https://date-fns.org/docs/formatDistance)
- [dfnsFormatDistanceStrict](https://date-fns.org/docs/formatDistanceStrict) _([impure](#pure-or-impure))_
  - [dfnsFormatDistanceStrictPure](https://date-fns.org/docs/formatDistanceStrict)
- [dfnsFormatDistanceToNow](https://date-fns.org/docs/formatDistanceToNow) _([impure](#pure-or-impure))_
  - [dfnsFormatDistanceToNowPure](https://date-fns.org/docs/formatDistanceToNow)
- [dfnsFormatDistanceToNowStrict](https://date-fns.org/docs/formatDistanceToNowStrict) _([impure](#pure-or-impure))_
  - [dfnsFormatDistanceToNowStrictPure](https://date-fns.org/docs/formatDistanceToNowStrict)
- [dfnsFormatDuration](https://date-fns.org/docs/formatDuration) _([impure](#pure-or-impure))_
  - [dfnsFormatDurationPure](https://date-fns.org/docs/formatDuration)

<a name="get-pipes" />

#### Get

- [dfnsGetOverlappingDaysInIntervals](https://date-fns.org/docs/getOverlappingDaysInIntervals)
- [dfnsGetTime](https://date-fns.org/docs/getTime)
- [dfnsGetMilliseconds](https://date-fns.org/docs/getMilliseconds)
- [dfnsGetSeconds](https://date-fns.org/docs/getSeconds)
- [dfnsGetMinutes](https://date-fns.org/docs/getMinutes)
- [dfnsGetHours](https://date-fns.org/docs/getHours)
- [dfnsGetDate](https://date-fns.org/docs/getDate)
- [dfnsGetDayOfYear](https://date-fns.org/docs/getDayOfYear)
- [dfnsGetDay](https://date-fns.org/docs/getDay)
- [dfnsGetISODay](https://date-fns.org/docs/getISODay)
- [dfnsGetISOWeek](https://date-fns.org/docs/getISOWeek)
- [dfnsGetDaysInMonth](https://date-fns.org/docs/getDaysInMonth)
- [dfnsGetMonth](https://date-fns.org/docs/getMonth)
- [dfnsGetQuarter](https://date-fns.org/docs/getQuarter)
- [dfnsGetDaysInYear](https://date-fns.org/docs/getDaysInYear)
- [dfnsGetYear](https://date-fns.org/docs/getYear)
- [dfnsGetISOWeeksInYear](https://date-fns.org/docs/getISOWeeksInYear)
- [dfnsGetISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
- [dfnsGetUnixTime](https://date-fns.org/docs/getUnixTime)
- [dfnsGetWeek](https://date-fns.org/docs/getWeek) _([impure](#pure-or-impure))_
  - [dfnsGetWeekPure](https://date-fns.org/docs/getWeek)
- [dfnsGetWeekOfMonth](https://date-fns.org/docs/getWeekOfMonth) _([impure](#pure-or-impure))_
  - [dfnsGetWeekOfMonthPure](https://date-fns.org/docs/getWeekOfMonth)
- [dfnsGetWeeksInMonth](https://date-fns.org/docs/getWeeksInMonth) _([impure](#pure-or-impure))_
  - [dfnsGetWeeksInMonthPure](https://date-fns.org/docs/getWeeksInMonth)
- [dfnsGetDecade](https://date-fns.org/docs/getDecade)
- [dfnsGetWeekYear](https://date-fns.org/docs/getWeekYear) _([impure](#pure-or-impure))_
  - [dfnsGetWeekYearPure](https://date-fns.org/docs/getWeekYear)

<a name="difference-pipes" />

#### Difference

- [dfnsDifferenceInMilliseconds](https://date-fns.org/docs/differenceInMilliseconds)
- [dfnsDifferenceInSeconds](https://date-fns.org/docs/differenceInSeconds)
- [dfnsDifferenceInMinutes](https://date-fns.org/docs/differenceInMinutes)
- [dfnsDifferenceInHours](https://date-fns.org/docs/differenceInHours)
- [dfnsDifferenceInCalendarDays](https://date-fns.org/docs/differenceInCalendarDays)
- [dfnsDifferenceInBusinessDays](https://date-fns.org/docs/differenceInBusinessDays)
- [dfnsDifferenceInDays](https://date-fns.org/docs/differenceInDays)
- [dfnsDifferenceInCalendarWeeks](https://date-fns.org/docs/differenceInCalendarWeeks)
- [dfnsDifferenceInWeeks](https://date-fns.org/docs/differenceInWeeks)
- [dfnsDifferenceInCalendarISOWeeks](https://date-fns.org/docs/differenceInCalendarISOWeeks)
- [dfnsDifferenceInCalendarMonths](https://date-fns.org/docs/differenceInCalendarMonths)
- [dfnsDifferenceInMonths](https://date-fns.org/docs/differenceInMonths)
- [dfnsDifferenceInCalendarQuarters](https://date-fns.org/docs/differenceInCalendarQuarters)
- [dfnsDifferenceInQuarters](https://date-fns.org/docs/differenceInQuarters)
- [dfnsDifferenceInCalendarYears](https://date-fns.org/docs/differenceInCalendarYears)
- [dfnsDifferenceInYears](https://date-fns.org/docs/differenceInYears)
- [dfnsDifferenceInCalendarISOWeekYears](https://date-fns.org/docs/differenceInCalendarISOWeekYears)
- [dfnsDifferenceInISOWeekYears](https://date-fns.org/docs/differenceInISOWeekYears)

<a name="add-pipes" />

#### Add

- [dfnsAddMilliseconds](https://date-fns.org/docs/addMilliseconds)
- [dfnsAddSeconds](https://date-fns.org/docs/addSeconds)
- [dfnsAddMinutes](https://date-fns.org/docs/addMinutes)
- [dfnsAddHours](https://date-fns.org/docs/addHours)
- [dfnsAddBusinessDays](https://date-fns.org/docs/addBusinessDays)
- [dfnsAddDays](https://date-fns.org/docs/addDays)
- [dfnsAddWeeks](https://date-fns.org/docs/addWeeks)
- [dfnsAddMonths](https://date-fns.org/docs/addMonths)
- [dfnsAddQuarters](https://date-fns.org/docs/addQuarters)
- [dfnsAddYears](https://date-fns.org/docs/addYears)
- [dfnsAddISOWeekYears](https://date-fns.org/docs/addISOWeekYears)

<a name="subtract-pipes" />

#### Subtract

- [dfnsSubMilliseconds](https://date-fns.org/docs/subMilliseconds)
- [dfnsSubSeconds](https://date-fns.org/docs/subSeconds)
- [dfnsSubMinutes](https://date-fns.org/docs/subMinutes)
- [dfnsSubHours](https://date-fns.org/docs/subHours)
- [dfnsSubDays](https://date-fns.org/docs/subDays)
- [dfnsSubWeeks](https://date-fns.org/docs/subWeeks)
- [dfnsSubMonths](https://date-fns.org/docs/subMonths)
- [dfnsSubQuarters](https://date-fns.org/docs/subQuarters)
- [dfnsSubYears](https://date-fns.org/docs/subYears)
- [dfnsSubISOWeekYears](https://date-fns.org/docs/subISOWeekYears)

<a name="end-pipes" />

#### End

- [dfnsEndOfSecond](https://date-fns.org/docs/endOfSecond)
- [dfnsEndOfMinute](https://date-fns.org/docs/endOfMinute)
- [dfnsEndOfHour](https://date-fns.org/docs/endOfHour)
- [dfnsEndOfDay](https://date-fns.org/docs/endOfDay)
- [dfnsEndOfToday](https://date-fns.org/docs/endOfToday)
- [dfnsEndOfTomorrow](https://date-fns.org/docs/endOfTomorrow)
- [dfnsEndOfYesterday](https://date-fns.org/docs/endOfYesterday)
- [dfnsEndOfWeek](https://date-fns.org/docs/endOfWeek)
- [dfnsEndOfISOWeek](https://date-fns.org/docs/endOfISOWeek)
- [dfnsEndOfMonth](https://date-fns.org/docs/endOfMonth)
- [dfnsEndOfQuarter](https://date-fns.org/docs/endOfQuarter)
- [dfnsEndOfYear](https://date-fns.org/docs/endOfYear)
- [dfnsEndOfISOWeekYear](https://date-fns.org/docs/endOfISOWeekYear)

<a name="start-pipes" />

#### Start

- [dfnsStartOfSecond](https://date-fns.org/docs/startOfSecond)
- [dfnsStartOfMinute](https://date-fns.org/docs/startOfMinute)
- [dfnsStartOfHour](https://date-fns.org/docs/startOfHour)
- [dfnsStartOfDay](https://date-fns.org/docs/startOfDay)
- [dfnsStartOfToday](https://date-fns.org/docs/startOfToday)
- [dfnsStartOfTomorrow](https://date-fns.org/docs/startOfTomorrow)
- [dfnsStartOfYesterday](https://date-fns.org/docs/startOfYesterday)
- [dfnsStartOfWeek](https://date-fns.org/docs/startOfWeek) _([impure](#pure-or-impure))_
  - [dfnsStartOfWeekPure](https://date-fns.org/docs/startOfWeek)
- [dfnsStartOfISOWeek](https://date-fns.org/docs/startOfISOWeek)
- [dfnsStartOfMonth](https://date-fns.org/docs/startOfMonth)
- [dfnsStartOfQuarter](https://date-fns.org/docs/startOfQuarter)
- [dfnsStartOfYear](https://date-fns.org/docs/startOfYear)
- [dfnsStartOfISOWeekYear](https://date-fns.org/docs/startOfISOWeekYear)
- [dfnsStartOfDecade](https://date-fns.org/docs/startOfDecade)
- [dfnsStartOfWeekYear](https://date-fns.org/docs/startOfWeekYear) _([impure](#pure-or-impure))_
  - [dfnsStartOfWeekYearPure](https://date-fns.org/docs/startOfWeekYear)

<a name="last-day-of-pipes" />

#### Last Day Of

- [dfnsLastDayOfWeek](https://date-fns.org/docs/lastDayOfWeek) _([impure](#pure-or-impure))_
  - [dfnsLastDayOfWeekPure](https://date-fns.org/docs/lastDayOfWeek)
- [dfnsLastDayOfISOWeek](https://date-fns.org/docs/lastDayOfISOWeek)
- [dfnsLastDayOfMonth](https://date-fns.org/docs/lastDayOfMonth)
- [dfnsLastDayOfQuarter](https://date-fns.org/docs/lastDayOfQuarter)
- [dfnsLastDayOfYear](https://date-fns.org/docs/lastDayOfYear)
- [dfnsLastDayOfISOWeekYear](https://date-fns.org/docs/lastDayOfISOWeekYear)
- [dfnsLastDayOfDecade](https://date-fns.org/docs/lastDayOfDecade)

<a name="is-pipes" />

#### Is...?

- [dfnsIsAfter](https://date-fns.org/docs/isAfter)
- [dfnsIsBefore](https://date-fns.org/docs/isBefore)
- [dfnsIsDate](https://date-fns.org/docs/isDate)
- [dfnsIsEqual](https://date-fns.org/docs/isEqual)
- [dfnsIsFuture](https://date-fns.org/docs/isFuture)
- [dfnsIsPast](https://date-fns.org/docs/isPast)
- [dfnsIsValid](https://date-fns.org/docs/isValid)
- [dfnsIsToday](https://date-fns.org/docs/isToday)
- [dfnsIsWeekend](https://date-fns.org/docs/isWeekend)
- [dfnsIsSameMonth](https://date-fns.org/docs/isSameMonth)
- [dfnsIsSameYear](https://date-fns.org/docs/isSameYear)
- [dfnsIsExists](https://date-fns.org/docs/isExists)
- [dfnsIsFirstDayOfMonth](https://date-fns.org/docs/isFirstDayOfMonth)
- [dfnsIsFriday](https://date-fns.org/docs/isFriday)
- [dfnsIsLastDayOfMonth](https://date-fns.org/docs/isLastDayOfMonth)
- [dfnsIsLeapYear](https://date-fns.org/docs/isLeapYear)
- [dfnsIsMatch](https://date-fns.org/docs/isMatch) _([impure](#pure-or-impure))_
  - [dfnsIsMatchPure](https://date-fns.org/docs/isMatch)
- [dfnsIsMonday](https://date-fns.org/docs/isMonday)
- [dfnsIsSameDay](https://date-fns.org/docs/isSameDay)
- [dfnsIsSameHour](https://date-fns.org/docs/isSameHour)
- [dfnsIsSameISOWeekYear](https://date-fns.org/docs/isSameISOWeekYear)
- [dfnsIsSameISOWeek](https://date-fns.org/docs/isSameISOWeek)
- [dfnsIsSameMinute](https://date-fns.org/docs/isSameMinute)
- [dfnsIsSameMonth](https://date-fns.org/docs/isSameMonth)
- [dfnsIsSameQuarter](https://date-fns.org/docs/isSameQuarter)
- [dfnsIsSameSecond](https://date-fns.org/docs/isSameSecond)
- [dfnsIsSameWeek](https://date-fns.org/docs/isSameWeek)
  - [dfnsIsSameWeekPure](https://date-fns.org/docs/isSameWeek) _([impure](#pure-or-impure))_
- [dfnsIsSameYear](https://date-fns.org/docs/isSameYear)
- [dfnsIsSaturday](https://date-fns.org/docs/isSaturday)
- [dfnsIsSunday](https://date-fns.org/docs/isSunday)
- [dfnsIsThisHour](https://date-fns.org/docs/isThisHour)
- [dfnsIsThisISOWeek](https://date-fns.org/docs/isThisISOWeek)
- [dfnsIsThisMinute](https://date-fns.org/docs/isThisMinute)
- [dfnsIsThisMonth](https://date-fns.org/docs/isThisMonth)
- [dfnsIsThisQuarter](https://date-fns.org/docs/isThisQuarter)
- [dfnsIsThisSecond](https://date-fns.org/docs/isThisSecond)
- [dfnsIsThisWeek](https://date-fns.org/docs/isThisWeek) _([impure](#pure-or-impure))_
  - [dfnsIsThisWeekPure](https://date-fns.org/docs/isThisWeek)
- [dfnsIsThisYear](https://date-fns.org/docs/isThisYear)
- [dfnsIsThursday](https://date-fns.org/docs/isThursday)
- [dfnsIsToday](https://date-fns.org/docs/isToday)
- [dfnsIsTomorrow](https://date-fns.org/docs/isTomorrow)
- [dfnsIsTuesday](https://date-fns.org/docs/isTuesday)
- [dfnsIsWednesday](https://date-fns.org/docs/isWednesday)
- [dfnsIsWithinInterval](https://date-fns.org/docs/isWithinInterval)
- [dfnsIsYesterday](https://date-fns.org/docs/isYesterday)

<a name="utils" />

## Utils

A collection of utilities built around date-fns functions.

### dfnsFormatRelativeToNow

> This pipe is ([impure](#pure-or-impure)), but there's the pure version `dfnsFormatRelativeToNowPure` too.

Same as `dfnsFormatRelative` but the date to comapre against is always `Date.now()`.

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
