# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [9.0.0-beta.0](https://github.com/joanllenas/ngx-date-fns/compare/v8.3.0...v9.0.0-beta.0) (2022-01-21)


### ⚠ BREAKING CHANGES

* **lib:** Applications will have to be built with Angular 12 or later to use this library.

### build

* **lib:** partial Ivy distribution ([1337624](https://github.com/joanllenas/ngx-date-fns/commit/133762413b7f5b19cce189ae70aee9ad30684cbc)), closes [#369](https://github.com/joanllenas/ngx-date-fns/issues/369)

## [8.3.0](https://github.com/joanllenas/ngx-date-fns/compare/v8.2.0...v8.3.0) (2021-10-23)


### Features

* **pipes:** Add Missing is* pipes ([b9f2854](https://github.com/joanllenas/ngx-date-fns/commit/b9f285417346cb57f25c5b31e88fb7e5d696bfb7))


### Bug Fixes

* **pipes:** added the new is* pipes to index.ts + misc pipe fixes ([427db30](https://github.com/joanllenas/ngx-date-fns/commit/427db302f81b12ff46968644164f36af220900fa))

## [8.2.0](https://github.com/joanllenas/ngx-date-fns/compare/v8.1.0...v8.2.0) (2021-07-31)


### Features

* **utils:** added new dfnsFormatRelativeToNow pipe ([c0d97b1](https://github.com/joanllenas/ngx-date-fns/commit/c0d97b1ba77cebf8f87ef3be1a34fe41dce78177))

## [8.1.0](https://github.com/joanllenas/ngx-date-fns/compare/v8.0.0...v8.1.0) (2021-05-01)


### Features

* **pipes:** added format-distance-to-now-strict pipe ([778f815](https://github.com/joanllenas/ngx-date-fns/commit/778f8155a30e07569d5dc356b79993a5676c8526))
* **pipes:** added format-relative pipe ([3530d68](https://github.com/joanllenas/ngx-date-fns/commit/3530d689095b53993f2744a1a484b567ca9c4e49))

## [8.0.0](https://github.com/joanllenas/ngx-date-fns/compare/v7.0.2...v8.0.0) (2021-03-06)


### ⚠ BREAKING CHANGES

* **pipes:** This version requires date-fns >= v2.16.0

### Features

* **pipes:** added formatDuration pipes ([03af4a5](https://github.com/joanllenas/ngx-date-fns/commit/03af4a5cd4febffc1d54744a3716b971fad3741d)), closes [#351](https://github.com/joanllenas/ngx-date-fns/issues/351)

### [7.0.2](https://github.com/joanllenas/ngx-date-fns/compare/v7.0.1...v7.0.2) (2021-02-21)


### Bug Fixes

* **config:** turn enableIvy to false for publishing ([4ff441a](https://github.com/joanllenas/ngx-date-fns/commit/4ff441a3e23da3ceff65d27cddeab56131084603))

### [7.0.1](https://github.com/joanllenas/ngx-date-fns/compare/v7.0.0...v7.0.1) (2021-02-21)


### Bug Fixes

* **pipes:** relaxed transform input types in some pipes ([6e7e4d7](https://github.com/joanllenas/ngx-date-fns/commit/6e7e4d70a3d92af32d6706515097bcee18d30c39)), closes [#347](https://github.com/joanllenas/ngx-date-fns/issues/347)

## [7.0.0](https://github.com/joanllenas/ngx-date-fns/compare/v6.6.0...v7.0.0) (2020-12-30)


### ⚠ BREAKING CHANGES

* **format pipes:** The following pipes: dfnsFormatDistanceStrict, dfnsFormatDistanceStrictPure,
dfnsFormatDistanceToNow, dfnsFormatDistanceToNowPure, dfnsFormatDistance, dfnsFormatDistancePure,
dfnsFormat, dfnsFormatPure don't throw an exception anymore when an invalida date is provided,
instead an empty string is returned.

### Bug Fixes

* **format pipes:** relaxed how invalid dates are treated ([564b9ed](https://github.com/joanllenas/ngx-date-fns/commit/564b9ed596bc475f2524fd88ffd757fac9f29203)), closes [#344](https://github.com/joanllenas/ngx-date-fns/issues/344)

## [6.6.0](https://github.com/joanllenas/ngx-date-fns/compare/v6.5.0...v6.6.0) (2020-10-24)


### Features

* **build:** improved lib tree shaking capabilities via SCAM structure ([38f3679](https://github.com/joanllenas/ngx-date-fns/commit/38f3679a56d58d9ee0c04ef4235d165f1132a012))

## [6.5.0](https://github.com/joanllenas/ngx-date-fns/compare/v6.4.0...v6.5.0) (2020-09-15)


### Features

* **pipes:** added new dfnsParseIso pipe ([27dd817](https://github.com/joanllenas/ngx-date-fns/commit/27dd817c6cb0ee34a6e0acb6d35a71df0de6cc0d)), closes [#337](https://github.com/joanllenas/ngx-date-fns/issues/337)

## [6.4.0](https://github.com/joanllenas/ngx-date-fns/compare/v6.3.2...v6.4.0) (2020-07-26)


### Features

* **pipes:** added dfnsFormatDistancePure pipe ([ce45ff1](https://github.com/joanllenas/ngx-date-fns/commit/ce45ff18d4d177492f54756f9e76c0251b2de354)), closes [#160](https://github.com/joanllenas/ngx-date-fns/issues/160)
* **pipes:** added dfnsFormatDistanceStrictPure pipe ([2a22dc9](https://github.com/joanllenas/ngx-date-fns/commit/2a22dc9b5b3f00c903f1d10db5819bbd76f16943)), closes [#160](https://github.com/joanllenas/ngx-date-fns/issues/160)
* **pipes:** added dfnsFormatDistanceToNowPure pipe [#160](https://github.com/joanllenas/ngx-date-fns/issues/160) ([27f6a03](https://github.com/joanllenas/ngx-date-fns/commit/27f6a03efd77279b87b03361063edab2aeae439b))
* **pipes:** added dfnsGetWeekOfMonthPure pipe [#160](https://github.com/joanllenas/ngx-date-fns/issues/160) ([81a80d2](https://github.com/joanllenas/ngx-date-fns/commit/81a80d2a560fe4e634e09191fd1eb502f977901c))
* **pipes:** added dfnsGetWeekPure pipe [#160](https://github.com/joanllenas/ngx-date-fns/issues/160) ([7abf543](https://github.com/joanllenas/ngx-date-fns/commit/7abf5431b45f6bf838652e1b33e350dad2e75dd4))
* **pipes:** added dfnsGetWeeksInMonthPure pipe [#160](https://github.com/joanllenas/ngx-date-fns/issues/160) ([5b13287](https://github.com/joanllenas/ngx-date-fns/commit/5b13287d94a5950adf40ec4288e55c4ad27e5325))
* **pipes:** added dfnsGetWeekYearPure pipe [#160](https://github.com/joanllenas/ngx-date-fns/issues/160) ([a50d3a8](https://github.com/joanllenas/ngx-date-fns/commit/a50d3a86e809b29d41760041fcb45447c6f8fbb6))
* **pipes:** added dfnsLastDayOfWeekPure pipe [#160](https://github.com/joanllenas/ngx-date-fns/issues/160) ([900579e](https://github.com/joanllenas/ngx-date-fns/commit/900579ee5d7dc271ce9429ba7a2ff28a15f793eb))
* **pipes:** added dfnsParsePure pipe [#160](https://github.com/joanllenas/ngx-date-fns/issues/160) ([9d0ca9e](https://github.com/joanllenas/ngx-date-fns/commit/9d0ca9e214b628238c31a2827a811f132a0406c6))
* **pipes:** added dfnsStartOfWeekPure pipe [#160](https://github.com/joanllenas/ngx-date-fns/issues/160) ([eac959a](https://github.com/joanllenas/ngx-date-fns/commit/eac959a2080fda7e005433e9370c7e9c688078bd))
* **pipes:** added dfnsStartOfWeekYearPure pipe [#160](https://github.com/joanllenas/ngx-date-fns/issues/160) ([cb203ad](https://github.com/joanllenas/ngx-date-fns/commit/cb203adf9c4e349cf867f44e93f516df28012c7b))
* **pipes:** added new dfnsFormatPure pipe ([350eca0](https://github.com/joanllenas/ngx-date-fns/commit/350eca0f6c806a00b20429d484fc7dc83a1959a1)), closes [#160](https://github.com/joanllenas/ngx-date-fns/issues/160)


### Bug Fixes

* **pipes:** added FormatDistanceToNowPurePipe to lib module ([75848d8](https://github.com/joanllenas/ngx-date-fns/commit/75848d81694e198277b1e07e78f4c6c8b94c3f68)), closes [#160](https://github.com/joanllenas/ngx-date-fns/issues/160)

### [6.3.2](https://github.com/joanllenas/ngx-date-fns/compare/v6.3.1...v6.3.2) (2020-07-19)


### Bug Fixes

* **pipes:** added missing DifferenceInCalendarQuartersPipe pipe to module ([891ea66](https://github.com/joanllenas/ngx-date-fns/commit/891ea6646937e14e1c4f7fc66b84412042272e7e))
* **pipes:** added missing GetISOWeekYearPipe pipe to the module ([d4650c2](https://github.com/joanllenas/ngx-date-fns/commit/d4650c2d25c9d8fd74b7879fd0fce9ecef50f289))
* **pipes:** added missing pipes to public api ([f361106](https://github.com/joanllenas/ngx-date-fns/commit/f3611068b90d51ec99087abf8a006ac43d5f04fe))

### [6.3.1](https://github.com/joanllenas/ngx-date-fns/compare/v6.3.0...v6.3.1) (2020-06-29)


### Bug Fixes

* **date-fns.module:** with Angular 10, ModuleWithProviders has mandatory generic parameter ([d97c585](https://github.com/joanllenas/ngx-date-fns/commit/d97c5851e0b382814420c2dfc934870de7ff145d))

## [6.3.0](https://github.com/joanllenas/ngx-date-fns/compare/v6.2.1...v6.3.0) (2020-04-26)


### Features

* **pipes:** added IsSameYearPipe pipe ([#330](https://github.com/joanllenas/ngx-date-fns/issues/330)) ([318a834](https://github.com/joanllenas/ngx-date-fns/commit/318a834a336ee81125636a0d3113f70e8dd01441)), closes [#329](https://github.com/joanllenas/ngx-date-fns/issues/329)

### [6.2.1](https://github.com/joanllenas/ngx-date-fns/compare/v6.2.0...v6.2.1) (2020-03-29)

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
