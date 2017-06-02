import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { DistanceInWordsPipe } from './distance-in-words.pipe';
import * as esLocale from 'date-fns/locale/es/index.js';

describe('DistanceInWordsPipe', () => {
  var pipe: DistanceInWordsPipe;

  beforeEach(() => pipe = new DistanceInWordsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, DistanceInWordsPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2), new Date(2015, 0, 1)))
      .to.equal('6 months');
  });

  it('should display output correctly when providing "includeSeconds"', () => {
    expect(pipe.transform(new Date(2015, 0, 1, 0, 0, 15), new Date(2015, 0, 1, 0, 0, 0), {includeSeconds: true}))
      .to.equal('less than 20 seconds');
  });

  it('should display output correctly when providing "addSuffix"', () => {
    expect(pipe.transform(new Date(2016, 0, 1), new Date(2015, 0, 1), {addSuffix: true}))
      .to.equal('about 1 year ago');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(pipe.transform(new Date(2016, 7, 1), new Date(2015, 0, 1), {locale: esLocale}))
      .to.equal('más de 1 año');
  });
});
