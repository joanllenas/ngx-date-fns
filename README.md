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
* endOfSecond (_tbd_)
* [dfnsGetSeconds](https://date-fns.org/docs/getSeconds)
* startOfSecond (_tbd_)
* [dfnsSubSeconds](https://date-fns.org/docs/subSeconds)
* [dfnsAddMinutes](https://date-fns.org/docs/addMinutes)
* [dfnsDifferenceInMinutes](https://date-fns.org/docs/differenceInMinutes)
* endOfMinute (_tbd_)
* [dfnsGetMinutes](https://date-fns.org/docs/getMinutes)
* startOfMinute (_tbd_)
* [dfnsSubMinutes](https://date-fns.org/docs/subMinutes)
* [dfnsAddHours](https://date-fns.org/docs/addHours)
* [dfnsDifferenceInHours](https://date-fns.org/docs/differenceInHours)
* endOfHour (_tbd_)
* [dfnsGetHours](https://date-fns.org/docs/getHours)
* startOfHour (_tbd_)
* [dfnsSubHours](https://date-fns.org/docs/subHours)
* [dfnsAddDays](https://date-fns.org/docs/addDays)
* [dfnsDifferenceInCalendarDays](https://date-fns.org/docs/differenceInCalendarDays)
* [dfnsDifferenceInDays](https://date-fns.org/docs/differenceInDays)
* endOfDay (_tbd_)
* endOfToday (_tbd_)
* endOfTomorrow (_tbd_)
* endOfYesterday (_tbd_)
* [dfnsGetDate](https://date-fns.org/docs/getDate)
* [dfnsGetDayOfYear](https://date-fns.org/docs/getDayOfYear)
* setDayOfYear (_tbd_)
* startOfDay (_tbd_)
* startOfToday (_tbd_)
* startOfTomorrow (_tbd_)
* startOfYesterday (_tbd_)
* [dfnsSubDays](https://date-fns.org/docs/subDays)
* [dfnsGetDay](https://date-fns.org/docs/getDay)
* [dfnsGetISODay](https://date-fns.org/docs/getISODay)
* [dfnsAddWeeks](https://date-fns.org/docs/addWeeks)
* [dfnsDifferenceInCalendarWeeks](https://date-fns.org/docs/differenceInCalendarWeeks)
* [dfnsDifferenceInWeeks](https://date-fns.org/docs/differenceInWeeks)
* endOfWeek (_tbd_)
* lastDayOfWeek (_tbd_)
* startOfWeek (_tbd_)
* [dfnsSubWeeks](https://date-fns.org/docs/subWeeks)
* [dfnsDifferenceInCalendarISOWeeks](https://date-fns.org/docs/differenceInCalendarISOWeeks)
* endOfISOWeek (_tbd_)
* [dfnsGetISOWeek](https://date-fns.org/docs/getISOWeek)
* lastDayOfISOWeek (_tbd_)
* startOfISOWeek (_tbd_)
* [dfnsAddMonths](https://date-fns.org/docs/addMonths)
* [dfnsDifferenceInCalendarMonths](https://date-fns.org/docs/differenceInCalendarMonths)
* differenceInMonths (_tbd_)
* endOfMonth (_tbd_)
* [dfnsGetDaysInMonth](https://date-fns.org/docs/getDaysInMonth)
* [dfnsGetMonth](https://date-fns.org/docs/getMonth)
* lastDayOfMonth (_tbd_)
* startOfMonth (_tbd_)
* [dfnsSubMonths](https://date-fns.org/docs/subMonths)
* [dfnsAddQuarters](https://date-fns.org/docs/addQuarters)
* differenceInCalendarQuarters (_tbd_)
* differenceInQuarters (_tbd_)
* endOfQuarter (_tbd_)
* getQuarter (_tbd_)
* lastDayOfQuarter (_tbd_)
* startOfQuarter (_tbd_)
* [dfnsSubQuarters](https://date-fns.org/docs/subQuarters)
* [dfnsAddYears](https://date-fns.org/docs/addYears)
* differenceInCalendarYears (_tbd_)
* differenceInYears (_tbd_)
* endOfYear (_tbd_)
* [dfnsGetDaysInYear](https://date-fns.org/docs/getDaysInYear)
* [dfnsGetYear](https://date-fns.org/docs/getYear)
* lastDayOfYear (_tbd_)
* startOfYear (_tbd_)
* [dfnsSubYears](https://date-fns.org/docs/subYears)
* [dfnsAddISOYears](https://date-fns.org/docs/addISOYears)
* differenceInCalendarISOYears (_tbd_)
* differenceInISOYears (_tbd_)
* endOfISOYear (_tbd_)
* [dfnsGetISOWeeksInYear](https://date-fns.org/docs/getISOWeeksInYear)
* getISOYear (_tbd_)
* lastDayOfISOYear (_tbd_)
* startOfISOYear (_tbd_)
* [dfnsSubISOYears](https://date-fns.org/docs/subISOYears)
