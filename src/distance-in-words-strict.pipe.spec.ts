import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { DistanceInWordsStrictPipe } from './distance-in-words-strict.pipe';
import * as esLocale from 'date-fns/locale/es/index.js';

describe('DistanceInWordsStrictPipe', () => {
  var pipe: DistanceInWordsStrictPipe;

  beforeEach(() => pipe = new DistanceInWordsStrictPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, DistanceInWordsStrictPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2), new Date(2015, 0, 2)))
      .to.equal('6 months');
    expect(pipe.transform(new Date(2015, 0, 1, 0, 0, 15), new Date(2015, 0, 1, 0, 0, 0)))
      .to.equal('15 seconds');
  });

  it('should display output correctly when providing "addSuffix"', () => {
    expect(pipe.transform(new Date(2016, 0, 1), new Date(2015, 0, 1), {addSuffix: true}))
      .to.equal('1 year ago');
  });

  it('should display output correctly when providing "unit"', () => {
    expect(pipe.transform(new Date(2016, 0, 1), new Date(2015, 0, 1), {unit: 'm'}))
      .to.equal('525600 minutes');
  });

  it('should display output correctly when providing "unit" and "partialMethod"', () => {
    expect(pipe.transform(new Date(2015, 0, 28), new Date(2015, 0, 1), {unit: 'M', partialMethod: 'ceil'}))
      .to.equal('1 month');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(pipe.transform(new Date(2016, 7, 1), new Date(2015, 0, 1), {locale: esLocale}))
      .to.equal('1 año');
  });
});
