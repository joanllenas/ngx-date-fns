# ngx-date-fns

[date-fns](https://date-fns.org/) pipes for Angular 2.0 and above.

[![Build Status](https://travis-ci.org/joanllenas/ngx-date-fns.png?branch=master)](https://travis-ci.org/joanllenas/ngx-date-fns)
[![npm version](https://badge.fury.io/js/ngx-date-fns.svg)](https://badge.fury.io/js/ngx-date-fns)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


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
* [dfnsDistanceInWords](https://date-fns.org/docs/distanceInWords)
* [dfnsDistanceInWordsStrict](https://date-fns.org/docs/distanceInWordsStrict)
* [dfnsDistanceInWordsToNow](https://date-fns.org/docs/distanceInWordsToNow)
* [dfnsFormat](https://date-fns.org/docs/format)
