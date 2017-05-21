# ngx-date-fns

[date-fns](https://date-fns.org/) pipes for Angular 2.0 and above.

[![Build Status](https://travis-ci.org/joanllenas/ngx-date-fns.png?branch=master)](https://travis-ci.org/joanllenas/ngx-date-fns)

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
* [distanceInWords](https://date-fns.org/docs/distanceInWords)
* [distanceInWordsStrict](https://date-fns.org/docs/distanceInWordsStrict)
* [distanceInWordsToNow](https://date-fns.org/docs/distanceInWordsToNow)
* [format](https://date-fns.org/docs/format)
