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
#### Distance
* [dfnsDistanceInWords](https://date-fns.org/docs/distanceInWords)
* [dfnsDistanceInWordsStrict](https://date-fns.org/docs/distanceInWordsStrict)
* [dfnsDistanceInWordsToNow](https://date-fns.org/docs/distanceInWordsToNow)
#### Min / Max
* [dfnsMin](https://date-fns.org/docs/min)
* [dfnsMax](https://date-fns.org/docs/max)
#### Misc
* [dfnsClosestTo](https://date-fns.org/docs/closestTo)
* [dfnsFormat](https://date-fns.org/docs/format)
#### Get
* [dfnsGetOverlappingDaysInRanges](https://date-fns.org/docs/getOverlappingDaysInRanges)
* [dfnsGetTime](https://date-fns.org/docs/getTime)
* [dfnsGetMilliseconds](https://date-fns.org/docs/getMilliseconds)
* [dfnsGetSeconds](https://date-fns.org/docs/getSeconds)
* [dfnsGetMinutes](https://date-fns.org/docs/getMinutes)
* [dfnsGetHours](https://date-fns.org/docs/getHours)
* [dfnsGetDate](https://date-fns.org/docs/getDate)
* [dfnsGetDayOfYear](https://date-fns.org/docs/getDayOfYear)
* [dfnsGetDay](https://date-fns.org/docs/getDay)
* [dfnsGetISODay](https://date-fns.org/docs/getISODay)
* [dfnsGetISOWeek](https://date-fns.org/docs/getISOWeek)
* [dfnsGetDaysInMonth](https://date-fns.org/docs/getDaysInMonth)
* [dfnsGetMonth](https://date-fns.org/docs/getMonth)
* [dfnsGetQuarter](https://date-fns.org/docs/getQuarter)
* [dfnsGetDaysInYear](https://date-fns.org/docs/getDaysInYear)
* [dfnsGetYear](https://date-fns.org/docs/getYear)
* [dfnsGetISOWeeksInYear](https://date-fns.org/docs/getISOWeeksInYear)
* [dfnsGetISOYear](https://date-fns.org/docs/getISOYear)
#### Difference
* [dfnsDifferenceInMilliseconds](https://date-fns.org/docs/differenceInMilliseconds)
* [dfnsDifferenceInSeconds](https://date-fns.org/docs/differenceInSeconds)
* [dfnsDifferenceInMinutes](https://date-fns.org/docs/differenceInMinutes)
* [dfnsDifferenceInHours](https://date-fns.org/docs/differenceInHours)
* [dfnsDifferenceInCalendarDays](https://date-fns.org/docs/differenceInCalendarDays)
* [dfnsDifferenceInDays](https://date-fns.org/docs/differenceInDays)
* [dfnsDifferenceInCalendarWeeks](https://date-fns.org/docs/differenceInCalendarWeeks)
* [dfnsDifferenceInWeeks](https://date-fns.org/docs/differenceInWeeks)
* [dfnsDifferenceInCalendarISOWeeks](https://date-fns.org/docs/differenceInCalendarISOWeeks)
* [dfnsDifferenceInCalendarMonths](https://date-fns.org/docs/differenceInCalendarMonths)
* [dfnsDifferenceInMonths](https://date-fns.org/docs/differenceInMonths)
* [dfnsDifferenceInCalendarQuarters](https://date-fns.org/docs/differenceInCalendarQuarters)
* [dfnsDifferenceInQuarters](https://date-fns.org/docs/differenceInQuarters)
* [dfnsDifferenceInCalendarYears](https://date-fns.org/docs/differenceInCalendarYears)
* [dfnsDifferenceInYears](https://date-fns.org/docs/differenceInYears)
* [dfnsDifferenceInCalendarISOYears](https://date-fns.org/docs/differenceInCalendarISOYears)
* [dfnsDifferenceInISOYears](https://date-fns.org/docs/differenceInISOYears)
#### Add
* [dfnsAddMilliseconds](https://date-fns.org/docs/addMilliseconds)
* [dfnsAddSeconds](https://date-fns.org/docs/addSeconds)
* [dfnsAddMinutes](https://date-fns.org/docs/addMinutes)
* [dfnsAddHours](https://date-fns.org/docs/addHours)
* [dfnsAddDays](https://date-fns.org/docs/addDays)
* [dfnsAddWeeks](https://date-fns.org/docs/addWeeks)
* [dfnsAddMonths](https://date-fns.org/docs/addMonths)
* [dfnsAddQuarters](https://date-fns.org/docs/addQuarters)
* [dfnsAddYears](https://date-fns.org/docs/addYears)
* [dfnsAddISOYears](https://date-fns.org/docs/addISOYears)
#### Subtract
* [dfnsSubMilliseconds](https://date-fns.org/docs/subMilliseconds)
* [dfnsSubSeconds](https://date-fns.org/docs/subSeconds)
* [dfnsSubMinutes](https://date-fns.org/docs/subMinutes)
* [dfnsSubHours](https://date-fns.org/docs/subHours)
* [dfnsSubDays](https://date-fns.org/docs/subDays)
* [dfnsSubWeeks](https://date-fns.org/docs/subWeeks)
* [dfnsSubMonths](https://date-fns.org/docs/subMonths)
* [dfnsSubQuarters](https://date-fns.org/docs/subQuarters)
* [dfnsSubYears](https://date-fns.org/docs/subYears)
* [dfnsSubISOYears](https://date-fns.org/docs/subISOYears)
#### End
* [dfnsEndOfSecond](https://date-fns.org/docs/endOfSecond)
* [dfnsEndOfMinute](https://date-fns.org/docs/endOfMinute)
* [dfnsEndOfHour](https://date-fns.org/docs/endOfHour)
* [dfnsEndOfDay](https://date-fns.org/docs/endOfDay)
* [dfnsEndOfToday](https://date-fns.org/docs/endOfToday)
* [dfnsEndOfTomorrow](https://date-fns.org/docs/endOfTomorrow)
* [dfnsEndOfYesterday](https://date-fns.org/docs/endOfYesterday)
* [dfnsEndOfWeek](https://date-fns.org/docs/endOfWeek)
* [dfnsEndOfISOWeek](https://date-fns.org/docs/endOfISOWeek)
* [dfnsEndOfMonth](https://date-fns.org/docs/endOfMonth)
* [dfnsEndOfQuarter](https://date-fns.org/docs/endOfQuarter)
* [dfnsEndOfYear](https://date-fns.org/docs/endOfYear)
* [dfnsEndOfISOYear](https://date-fns.org/docs/endOfISOYear)
#### Start
* [dfnsStartOfSecond](https://date-fns.org/docs/startOfSecond)
* [dfnsStartOfMinute](https://date-fns.org/docs/startOfMinute)
* [dfnsStartOfHour](https://date-fns.org/docs/startOfHour)
* [dfnsStartOfDay](https://date-fns.org/docs/startOfDay)
* [dfnsStartOfToday](https://date-fns.org/docs/startOfToday)
* [dfnsStartOfTomorrow](https://date-fns.org/docs/startOfTomorrow)
* [dfnsStartOfYesterday](https://date-fns.org/docs/startOfYesterday)
* [dfnsStartOfWeek](https://date-fns.org/docs/startOfWeek)
* [dfnsStartOfISOWeek](https://date-fns.org/docs/startOfISOWeek)
* [dfnsStartOfMonth](https://date-fns.org/docs/startOfMonth)
* [dfnsStartOfQuarter](https://date-fns.org/docs/startOfQuarter)
* [dfnsStartOfYear](https://date-fns.org/docs/startOfYear)
* [dfnsStartOfISOYear](https://date-fns.org/docs/startOfISOYear)
#### Last
* [dfnsLastDayOfWeek](https://date-fns.org/docs/lastDayOfWeek)
* [dfnsLastDayOfISOWeek](https://date-fns.org/docs/lastDayOfISOWeek)
* [dfnsLastDayOfMonth](https://date-fns.org/docs/lastDayOfMonth)
* [dfnsLastDayOfQuarter](https://date-fns.org/docs/lastDayOfQuarter)
* [dfnsLastDayOfYear](https://date-fns.org/docs/lastDayOfYear)
* [dfnsLastDayOfISOYear](https://date-fns.org/docs/lastDayOfISOYear)
