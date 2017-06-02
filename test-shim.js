require('source-map-support').install({
  environment: 'node'
});

const jsdom = require('jsdom');

const {window} = new jsdom.JSDOM('<!doctype html><html><body></body></html>');


// global.window = global.Window = window
global.document = window.document;
global.mediaMatch = window.mediaMatch;
global.HTMLElement = window.HTMLElement;
global.XMLHttpRequest = window.XMLHttpRequest;
global.Node = window.Node;
// global.scrollTo = window.scrollTo;
// global.history = window.history;
// global.clearInterval = window.clearInterval;
// global.pageYOffset = window.pageYOffset;
// global.sinon = require('sinon');

require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());
