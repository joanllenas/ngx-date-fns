import 'es6-shim';
import 'reflect-metadata';
import { DistanceInWordsToNowPipe } from './distance-in-words-to-now.pipe';
import * as esLocale from 'date-fns/locale/es/index.js';

describe('DistanceInWordsToNowPipe', () => {
  var pipe: DistanceInWordsToNowPipe;

  beforeEach(() => {
    pipe = new DistanceInWordsToNowPipe();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2015, 0, 1));
  });

  afterEach(jasmine.clock().uninstall);

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined))
      .toThrow(new Error(DistanceInWordsToNowPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2)))
      .toBe('6 months');
  });

  it('should display output correctly when providing "includeSeconds"', () => {
    expect(pipe.transform(new Date(2015, 0, 1, 0, 0, 15), {includeSeconds: true}))
      .toBe('less than 20 seconds');
  });

  it('should display output correctly when providing "addSuffix"', () => {
    expect(pipe.transform(new Date(2016, 0, 1), {addSuffix: true}))
      .toBe('in about 1 year');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(pipe.transform(new Date(2016, 7, 1), {locale: esLocale}))
      .toBe('más de 1 año');
  });
});
