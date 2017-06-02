import 'core-js';
import { expect } from 'chai';
import * as sinon from 'sinon';
import 'reflect-metadata';
import { DistanceInWordsToNowPipe } from './distance-in-words-to-now.pipe';
import * as esLocale from 'date-fns/locale/es/index.js';

describe('DistanceInWordsToNowPipe', () => {
  var pipe: DistanceInWordsToNowPipe;
  var clock;

  beforeEach(() => {
    pipe = new DistanceInWordsToNowPipe();
    clock = sinon.useFakeTimers(new Date(2015, 0, 1).getTime());
  });

  afterEach(() => {clock.restore()});

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined))
      .to.throw(Error, DistanceInWordsToNowPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2)))
      .to.equal('6 months');
  });

  it('should display output correctly when providing "includeSeconds"', () => {
    expect(pipe.transform(new Date(2015, 0, 1, 0, 0, 15), {includeSeconds: true}))
      .to.equal('less than 20 seconds');
  });

  it('should display output correctly when providing "addSuffix"', () => {
    expect(pipe.transform(new Date(2016, 0, 1), {addSuffix: true}))
      .to.equal('in about 1 year');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(pipe.transform(new Date(2016, 7, 1), {locale: esLocale}))
      .to.equal('más de 1 año');
  });
});
