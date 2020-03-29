# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [6.2.0](https://github.com/joanllenas/ngx-date-fns/compare/v6.1.0...v6.2.0) (2020-03-29)


### Features

* **pipes:** added a few new pipes ([52a1c18](https://github.com/joanllenas/ngx-date-fns/commit/52a1c185d281abf6ee616adfef7be30d9e74f8e1)), closes [#328](https://github.com/joanllenas/ngx-date-fns/issues/328)

## [6.1.0](https://github.com/joanllenas/ngx-date-fns/compare/v6.0.0...v6.1.0) (2020-02-23)


### Features

* **pipes:** added dfnsWeekdayName pipe ([8d7e2d7](https://github.com/joanllenas/ngx-date-fns/commit/8d7e2d79f08f964ab76a9fe2bb2e669777adc7a1)), closes [#326](https://github.com/joanllenas/ngx-date-fns/issues/326)
* **pipes:** added is... new pipes ([38289fc](https://github.com/joanllenas/ngx-date-fns/commit/38289fc7829627e4bfdde096b69ff9c3d7d2e309)), closes [#316](https://github.com/joanllenas/ngx-date-fns/issues/316)


### Bug Fixes

* **pipes:** added missing Is... pipes to module ([2ee05da](https://github.com/joanllenas/ngx-date-fns/commit/2ee05dabcda5b8e6e9f812b9ef4b00897a093505)), closes [#326](https://github.com/joanllenas/ngx-date-fns/issues/326)
* **pipes:** fixed circular deps. due to incorrect imports ([ebe84b7](https://github.com/joanllenas/ngx-date-fns/commit/ebe84b76e56e1e64ac868cd3ca069040f9060464))

## [6.0.0](https://github.com/joanllenas/ngx-date-fns/compare/v4.0.3...v6.0.0) (2020-02-09)


### ⚠ BREAKING CHANGES

* **pipes:** The following pipes: GetWeekOfMonthPipe, GetWeekYearPipe, GetWeekPipe,
GetWeeksInMonthPipe, LastDayOfWeekPipe, StartOfWeekYearPipe and StartOfWeekPipe are now impure and
require parametrization when instantiated via new MyClass().
* **upgrade:** - Library is now Angular >= v8 only.
- Pipe argument validations are now done by date-fns.
- Renamed dfnsAddISOYears to dfnsAddISOWeekYears.
- Renamed dfnsDifferenceInCalendarISOYears to dfnsDifferenceInCalendarISOWeekYears.
- Renamed dfnsDifferenceInISOYears to dfnsDifferenceInISOWeekYears.
- Renamed dfnsDistanceInWords to dfnsFormatDistance. Also, notice that date arguments have been swapped to be consistent with date-fns.

### Features

* **upgrade:** Upgraded to support date-fns v2 ([#292](https://github.com/joanllenas/ngx-date-fns/issues/292)) ([beedeac](https://github.com/joanllenas/ngx-date-fns/commit/beedeac0799d1869b7f0add24206b7696a1a6d4a)), closes [/date-fns.org/v2.0.1/docs/formatDistanceStrict#v2](https://github.com/joanllenas//date-fns.org/v2.0.1/docs/formatDistanceStrict/issues/v2) [/date-fns.org/v2.0.1/docs/getOverlappingDaysInIntervals#v2](https://github.com/joanllenas//date-fns.org/v2.0.1/docs/getOverlappingDaysInIntervals/issues/v2) [/github.com/date-fns/date-fns/blob/master/CHANGELOG.md#200---2019-08-20](https://github.com/joanllenas//github.com/date-fns/date-fns/blob/master/CHANGELOG.md/issues/200---2019-08-20)


### Bug Fixes

* **pipes:** added missing locale support to all locale-aware pipes ([34ffbfd](https://github.com/joanllenas/ngx-date-fns/commit/34ffbfd7c60b235b0793b9cc915290f1bc0f48cd)), closes [#309](https://github.com/joanllenas/ngx-date-fns/issues/309)

## [5.0.0](https://github.com/joanllenas/ngx-date-fns/compare/v4.0.3...v5.0.0) (2019-09-02)


### ⚠ BREAKING CHANGES

* **upgrade:** - Library is now Angular >= v8 only.
- Pipe argument validations are now done by date-fns.
- Renamed dfnsAddISOYears to dfnsAddISOWeekYears.
- Renamed dfnsDifferenceInCalendarISOYears to dfnsDifferenceInCalendarISOWeekYears.
- Renamed dfnsDifferenceInISOYears to dfnsDifferenceInISOWeekYears.
- Renamed dfnsDistanceInWords to dfnsFormatDistance. Also, notice that date arguments have been swapped to be consistent with date-fns.

### Features

* **upgrade:** Upgraded to support date-fns v2 ([2b5909a](https://github.com/joanllenas/ngx-date-fns/commit/2b5909a)), closes [/date-fns.org/v2.0.1/docs/formatDistanceStrict#v2](https://github.com/joanllenas//date-fns.org/v2.0.1/docs/formatDistanceStrict/issues/v2) [/date-fns.org/v2.0.1/docs/getOverlappingDaysInIntervals#v2](https://github.com/joanllenas//date-fns.org/v2.0.1/docs/getOverlappingDaysInIntervals/issues/v2) [/github.com/date-fns/date-fns/blob/master/CHANGELOG.md#200---2019-08-20](https://github.com/joanllenas//github.com/date-fns/date-fns/blob/master/CHANGELOG.md/issues/200---2019-08-20)

<a name="4.0.3"></a>
## [4.0.3](https://github.com/joanllenas/ngx-date-fns/compare/v4.0.2...v4.0.3) (2019-07-28)


### Bug Fixes

* **pipes:** Allowed `0` dates in pipes ([c05b6a6](https://github.com/joanllenas/ngx-date-fns/commit/c05b6a6)), closes [#277](https://github.com/joanllenas/ngx-date-fns/issues/277)



<a name="4.0.2"></a>
## [4.0.2](https://github.com/joanllenas/ngx-date-fns/compare/v4.0.1...v4.0.2) (2019-01-21)



<a name="4.0.1"></a>
## [4.0.1](https://github.com/joanllenas/ngx-date-fns/compare/v4.0.0...v4.0.1) (2019-01-21)



<a name="4.0.0"></a>
# [4.0.0](https://github.com/joanllenas/ngx-date-fns/compare/v3.0.2...v4.0.0) (2019-01-21)


### Bug Fixes

* **angular:** Upgrade to Angular v7 and rxjs v6 ([32d6505](https://github.com/joanllenas/ngx-date-fns/commit/32d6505)), closes [#216](https://github.com/joanllenas/ngx-date-fns/issues/216)


### BREAKING CHANGES

* **angular:** This version requires Angular >= v6 and RxJs >= v6



<a name="2.0.3"></a>
## [2.0.3](https://github.com/joanllenas/ngx-date-fns/compare/v2.0.2...v2.0.3) (2018-11-26)


### Bug Fixes

* **locales:** Fixed locale aware pipes behaviour in OnPush situations ([3d3a5d0](https://github.com/joanllenas/ngx-date-fns/commit/3d3a5d0)), closes [#208](https://github.com/joanllenas/ngx-date-fns/issues/208)



<a name="2.0.2"></a>
## [2.0.2](https://github.com/joanllenas/ngx-date-fns/compare/v2.0.1...v2.0.2) (2018-04-08)



<a name="2.0.1"></a>
## [2.0.1](https://github.com/joanllenas/ngx-date-fns/compare/v2.0.0...v2.0.1) (2018-04-08)


### Bug Fixes

* **export:** Added missing library export ([ce23004](https://github.com/joanllenas/ngx-date-fns/commit/ce23004))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/joanllenas/ngx-date-fns/compare/v1.13.4...v2.0.0) (2018-04-08)


### Features

* **locales:** Added global locale configuration options ([7f50125](https://github.com/joanllenas/ngx-date-fns/commit/7f50125)), closes [#135](https://github.com/joanllenas/ngx-date-fns/issues/135)


### BREAKING CHANGES

* **locales:** To import the module you have to use `DateFnsModule.forRoot()`.



<a name="1.13.4"></a>
## [1.13.4](https://github.com/joanllenas/ngx-date-fns/compare/v1.13.3...v1.13.4) (2018-03-15)



<a name=""></a>
# [](https://github.com/joanllenas/ngx-date-fns/compare/v1.13.2-alpha.5...v) (2018-03-15)



<a name=""></a>
# [](https://github.com/joanllenas/ngx-date-fns/compare/v1.13.2-alpha.5...v) (2018-03-15)



<a name="1.13.2-alpha.5"></a>
## [1.13.2-alpha.5](https://github.com/joanllenas/ngx-date-fns/compare/v1.13.2-alpha.4...v1.13.2-alpha.5) (2018-03-15)



<a name="1.13.2-alpha.4"></a>
## [1.13.2-alpha.4](https://github.com/joanllenas/ngx-date-fns/compare/v1.13.2-alpha.3...v1.13.2-alpha.4) (2018-03-15)



<a name="1.13.2-alpha.3"></a>
## [1.13.2-alpha.3](https://github.com/joanllenas/ngx-date-fns/compare/v1.13.2-alpha.2...v1.13.2-alpha.3) (2018-03-15)



<a name="1.13.2-alpha.2"></a>
## [1.13.2-alpha.2](https://github.com/joanllenas/ngx-date-fns/compare/v1.13.2-alpha.1...v1.13.2-alpha.2) (2018-03-15)



<a name="1.13.2-alpha.1"></a>
## [1.13.2-alpha.1](https://github.com/joanllenas/ngx-date-fns/compare/v1.13.2-alpha.0...v1.13.2-alpha.1) (2018-03-15)



<a name="1.13.2-alpha.0"></a>
## [1.13.2-alpha.0](https://github.com/joanllenas/ngx-date-fns/compare/v1.13.1...v1.13.2-alpha.0) (2018-03-15)



<a name="1.13.1"></a>
## [1.13.1](https://github.com/joanllenas/ngx-date-fns/compare/v1.12.0...v1.13.1) (2018-03-15)


### Bug Fixes

* **typings:** Fixed pipe typings ([bb641d4](https://github.com/joanllenas/ngx-date-fns/commit/bb641d4))



<a name="1.13.0"></a>
# [1.13.0](https://github.com/joanllenas/ngx-date-fns/compare/v1.12.0...v1.13.0) (2018-03-15)


### Bug Fixes

* **typings:** Fixed pipe typings ([bb641d4](https://github.com/joanllenas/ngx-date-fns/commit/bb641d4))
