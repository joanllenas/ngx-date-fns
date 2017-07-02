# ![](./.github/date-fns.png) + ![](./.github/angular-red.png) = ngx-date-fns

[![Build Status](https://travis-ci.org/joanllenas/ngx-date-fns.png?branch=master)](https://travis-ci.org/joanllenas/ngx-date-fns)
[![codecov](https://codecov.io/gh/joanllenas/ngx-date-fns/branch/master/graph/badge.svg)](https://codecov.io/gh/joanllenas/ngx-date-fns)
[![npm version](https://badge.fury.io/js/ngx-date-fns.svg)](https://badge.fury.io/js/ngx-date-fns)
[![Known Vulnerabilities](https://snyk.io/test/github/joanllenas/ngx-date-fns/badge.svg)](https://snyk.io/test/github/joanllenas/ngx-date-fns)
[![Greenkeeper badge](https://badges.greenkeeper.io/joanllenas/ngx-date-fns.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[date-fns](https://date-fns.org/) pipes for Angular 2.0 and above.



Installation
------------

`npm install --save ngx-date-fns`


Usage
-----

Import `DateFnsModule` into your app's modules:

``` typescript
import {DateFnsModule} from 'ngx-date-fns';

@NgModule({
  imports: [
    // (...)
    DateFnsModule
  ]
})
```

``` typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
    <p>
      {{ dateOne | dfnsFormat : 'YYYY/MM/DD' }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMin }}
    </p>
    <p>
      {{ [dateOne, dateTwo] | dfnsMax | dfnsFormat : 'YYYY/MM/DD' }}
    </p>
  `
})
export class AppComponent {
  dateOne = new Date(2016, 0, 1);
  dateTwo = new Date(2017, 0, 1);
}
```


Available pipes
---------------
* [dfnsClosestTo](https://date-fns.org/docs/closestTo)
* [dfnsDistanceInWords](https://date-fns.org/docs/distanceInWords)
* [dfnsDistanceInWordsStrict](https://date-fns.org/docs/distanceInWordsStrict)
* [dfnsDistanceInWordsToNow](https://date-fns.org/docs/distanceInWordsToNow)
* [dfnsFormat](https://date-fns.org/docs/format)
* [dfnsMin](https://date-fns.org/docs/min)
* [dfnsMax](https://date-fns.org/docs/max)
* [dfnsGetOverlappingDaysInRanges](https://date-fns.org/docs/getOverlappingDaysInRanges)
* [dfnsGetTime](https://date-fns.org/docs/getTime)
* [dfnsAddMilliseconds](https://date-fns.org/docs/addMilliseconds)
* [dfnsDifferenceInMilliseconds](https://date-fns.org/docs/differenceInMilliseconds)
* [dfnsGetMilliseconds](https://date-fns.org/docs/getMilliseconds)
* [dfnsSubMilliseconds](https://date-fns.org/docs/subMilliseconds)
* [dfnsAddSeconds](https://date-fns.org/docs/addSeconds)
* [dfnsDifferenceInSeconds](https://date-fns.org/docs/differenceInSeconds)
* [dfnsEndOfSecond](https://date-fns.org/docs/endOfSecond)
* [dfnsGetSeconds](https://date-fns.org/docs/getSeconds)
* [dfnsStartOfSecond](https://date-fns.org/docs/startOfSecond)
* [dfnsSubSeconds](https://date-fns.org/docs/subSeconds)
* [dfnsAddMinutes](https://date-fns.org/docs/addMinutes)
* [dfnsDifferenceInMinutes](https://date-fns.org/docs/differenceInMinutes)
* [dfnsEndOfMinute](https://date-fns.org/docs/endOfMinute)
* [dfnsGetMinutes](https://date-fns.org/docs/getMinutes)
* [dfnsStartOfMinute](https://date-fns.org/docs/startOfMinute)
* [dfnsSubMinutes](https://date-fns.org/docs/subMinutes)
* [dfnsAddHours](https://date-fns.org/docs/addHours)
* [dfnsDifferenceInHours](https://date-fns.org/docs/differenceInHours)
* [dfnsEndOfHour](https://date-fns.org/docs/endOfHour)
* [dfnsGetHours](https://date-fns.org/docs/getHours)
* [dfnsStartOfHour](https://date-fns.org/docs/startOfHour)
* [dfnsSubHours](https://date-fns.org/docs/subHours)
* [dfnsAddDays](https://date-fns.org/docs/addDays)
* [dfnsDifferenceInCalendarDays](https://date-fns.org/docs/differenceInCalendarDays)
* [dfnsDifferenceInDays](https://date-fns.org/docs/differenceInDays)
* [dfnsEndOfDay](https://date-fns.org/docs/endOfDay)
* [dfnsEndOfToday](https://date-fns.org/docs/endOfToday)
* [dfnsEndOfTomorrow](https://date-fns.org/docs/endOfTomorrow)
* [dfnsEndOfYesterday](https://date-fns.org/docs/endOfYesterday)
* [dfnsGetDate](https://date-fns.org/docs/getDate)
* [dfnsGetDayOfYear](https://date-fns.org/docs/getDayOfYear)
* [dfnsStartOfDay](https://date-fns.org/docs/startOfDay)
* [dfnsStartOfToday](https://date-fns.org/docs/startOfToday)
* [dfnsStartOfTomorrow](https://date-fns.org/docs/startOfTomorrow)
* [dfnsStartOfYesterday](https://date-fns.org/docs/startOfYesterday)
* [dfnsSubDays](https://date-fns.org/docs/subDays)
* [dfnsGetDay](https://date-fns.org/docs/getDay)
* [dfnsGetISODay](https://date-fns.org/docs/getISODay)
* [dfnsAddWeeks](https://date-fns.org/docs/addWeeks)
* [dfnsDifferenceInCalendarWeeks](https://date-fns.org/docs/differenceInCalendarWeeks)
* [dfnsDifferenceInWeeks](https://date-fns.org/docs/differenceInWeeks)
* [dfnsEndOfWeek](https://date-fns.org/docs/endOfWeek)
* [dfnsLastDayOfWeek](https://date-fns.org/docs/lastDayOfWeek)
* [dfnsStartOfWeek](https://date-fns.org/docs/startOfWeek)
* [dfnsSubWeeks](https://date-fns.org/docs/subWeeks)
* [dfnsDifferenceInCalendarISOWeeks](https://date-fns.org/docs/differenceInCalendarISOWeeks)
* [dfnsEndOfISOWeek](https://date-fns.org/docs/endOfISOWeek)
* [dfnsGetISOWeek](https://date-fns.org/docs/getISOWeek)
* [dfnsLastDayOfISOWeek](https://date-fns.org/docs/lastDayOfISOWeek)
* [dfnsStartOfISOWeek](https://date-fns.org/docs/startOfISOWeek)
* [dfnsAddMonths](https://date-fns.org/docs/addMonths)
* [dfnsDifferenceInCalendarMonths](https://date-fns.org/docs/differenceInCalendarMonths)
* [dfnsDifferenceInMonths](https://date-fns.org/docs/differenceInMonths)
* [dfnsEndOfMonth](https://date-fns.org/docs/endOfMonth)
* [dfnsGetDaysInMonth](https://date-fns.org/docs/getDaysInMonth)
* [dfnsGetMonth](https://date-fns.org/docs/getMonth)
* [dfnsLastDayOfMonth](https://date-fns.org/docs/lastDayOfMonth)
* [dfnsStartOfMonth](https://date-fns.org/docs/startOfMonth)
* [dfnsSubMonths](https://date-fns.org/docs/subMonths)
* [dfnsAddQuarters](https://date-fns.org/docs/addQuarters)
* [dfnsDifferenceInCalendarQuarters](https://date-fns.org/docs/differenceInCalendarQuarters)
* [dfnsDifferenceInQuarters](https://date-fns.org/docs/differenceInQuarters)
* [dfnsEndOfQuarter](https://date-fns.org/docs/endOfQuarter)
* [dfnsGetQuarter](https://date-fns.org/docs/getQuarter)
* [dfnsLastDayOfQuarter](https://date-fns.org/docs/lastDayOfQuarter)
* [dfnsStartOfQuarter](https://date-fns.org/docs/startOfQuarter)
* [dfnsSubQuarters](https://date-fns.org/docs/subQuarters)
* [dfnsAddYears](https://date-fns.org/docs/addYears)
* [dfnsDifferenceInCalendarYears](https://date-fns.org/docs/differenceInCalendarYears)
* [dfnsDifferenceInYears](https://date-fns.org/docs/differenceInYears)
* [dfnsEndOfYear](https://date-fns.org/docs/endOfYear)
* [dfnsGetDaysInYear](https://date-fns.org/docs/getDaysInYear)
* [dfnsGetYear](https://date-fns.org/docs/getYear)
* [dfnsLastDayOfYear](https://date-fns.org/docs/lastDayOfYear)
* [dfnsStartOfYear](https://date-fns.org/docs/startOfYear)
* [dfnsSubYears](https://date-fns.org/docs/subYears)
* [dfnsAddISOYears](https://date-fns.org/docs/addISOYears)
* [dfnsDifferenceInCalendarISOYears](https://date-fns.org/docs/differenceInCalendarISOYears)
* [dfnsDifferenceInISOYears](https://date-fns.org/docs/differenceInISOYears)
* [dfnsEndOfISOYear](https://date-fns.org/docs/endOfISOYear)
* [dfnsGetISOWeeksInYear](https://date-fns.org/docs/getISOWeeksInYear)
* [dfnsGetISOYear](https://date-fns.org/docs/getISOYear)
* [dfnsLastDayOfISOYear](https://date-fns.org/docs/lastDayOfISOYear)
* [dfnsStartOfISOYear](https://date-fns.org/docs/startOfISOYear)
* [dfnsSubISOYears](https://date-fns.org/docs/subISOYears)
