# ![](./.github/date-fns.png) + ![](./.github/angular-red.png) = ngx-date-fns

[![Build Status](https://travis-ci.org/joanllenas/ngx-date-fns.png?branch=master)](https://travis-ci.org/joanllenas/ngx-date-fns)
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
    DateFnsModule
  ]
})
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
* addMilliseconds (_tbd_)
* [dfnsDifferenceInMilliseconds](https://date-fns.org/docs/differenceInMilliseconds)
* [dfnsGetMilliseconds](https://date-fns.org/docs/getMilliseconds)
* subMilliseconds (_tbd_)
* addSeconds (_tbd_)
* [dfnsDifferenceInSeconds](https://date-fns.org/docs/differenceInSeconds)
* endOfSecond (_tbd_)
* [dfnsGetSeconds](https://date-fns.org/docs/getSeconds)
* startOfSecond (_tbd_)
* subSeconds (_tbd_)
* addMinutes (_tbd_)
* [dfnsDifferenceInMinutes](https://date-fns.org/docs/differenceInMinutes)
* endOfMinute (_tbd_)
* [dfnsGetMinutes](https://date-fns.org/docs/getMinutes)
* startOfMinute (_tbd_)
* subMinutes (_tbd_)
* addHours (_tbd_)
* [dfnsDifferenceInHours(https://date-fns.org/docs/differenceInHours)]
* endOfHour (_tbd_)
* [dfnsGetHours](https://date-fns.org/docs/getHours)
* startOfHour (_tbd_)
* subHours (_tbd_)
* addDays (_tbd_)
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
* subDays (_tbd_)
* [dfnsGetDay](https://date-fns.org/docs/getDay)
* [dfnsGetISODay] (https://date-fns.org/docs/getISODay)
* addWeeks (_tbd_)
* [dfnsDifferenceInCalendarWeeks](https://date-fns.org/docs/differenceInCalendarWeeks)
* [dfnsDifferenceInWeeks](https://date-fns.org/docs/differenceInWeeks)
* endOfWeek (_tbd_)
* lastDayOfWeek (_tbd_)
* startOfWeek (_tbd_)
* subWeeks (_tbd_)
* [dfnsDifferenceInCalendarISOWeeks](https://date-fns.org/docs/differenceInCalendarISOWeeks)
* endOfISOWeek (_tbd_)
* [dfnsGetISOWeek](https://date-fns.org/docs/getISOWeek)
* lastDayOfISOWeek (_tbd_)
* startOfISOWeek (_tbd_)
* addMonths (_tbd_)
* [dfnsDifferenceInCalendarMonths](https://date-fns.org/docs/differenceInCalendarMonths)
* differenceInMonths (_tbd_)
* endOfMonth (_tbd_)
* [dfnsGetDaysInMonth](https://date-fns.org/docs/getDaysInMonth)
* [dfnsGetMonth](https://date-fns.org/docs/getMonth)
* lastDayOfMonth (_tbd_)
* startOfMonth (_tbd_)
* subMonths (_tbd_)
* addQuarters (_tbd_)
* differenceInCalendarQuarters (_tbd_)
* differenceInQuarters (_tbd_)
* endOfQuarter (_tbd_)
* getQuarter (_tbd_)
* lastDayOfQuarter (_tbd_)
* startOfQuarter (_tbd_)
* subQuarters (_tbd_)
* addYears (_tbd_)
* differenceInCalendarYears (_tbd_)
* differenceInYears (_tbd_)
* endOfYear (_tbd_)
* [dfnsGetDaysInYear](https://date-fns.org/docs/getDaysInYear)
* [dfnsGetYear](https://date-fns.org/docs/getYear)
* lastDayOfYear (_tbd_)
* startOfYear (_tbd_)
* subYears (_tbd_)
* addISOYears (_tbd_)
* differenceInCalendarISOYears (_tbd_)
* differenceInISOYears (_tbd_)
* endOfISOYear (_tbd_)
* [dfnsGetISOWeeksInYear](https://date-fns.org/docs/getISOWeeksInYear)
* getISOYear (_tbd_)
* lastDayOfISOYear (_tbd_)
* startOfISOYear (_tbd_)
* subISOYears (_tbd_)
