


import { DistanceInWordsPipe } from './distance-in-words.pipe';
import * as esLocale from 'date-fns/locale/es/index.js';
import { DateFnsConfigurationService } from './date-fns-configuration.service';

describe('DistanceInWordsPipe', () => {
  let pipe: DistanceInWordsPipe;

  beforeEach(() => pipe = new DistanceInWordsPipe(new DateFnsConfigurationService()));

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, DistanceInWordsPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2), new Date(2015, 0, 1)))
      .toBe('6 months');
  });

  it('should display output correctly when providing "includeSeconds"', () => {
    expect(pipe.transform(new Date(2015, 0, 1, 0, 0, 15), new Date(2015, 0, 1, 0, 0, 0), {includeSeconds: true}))
      .toBe('less than 20 seconds');
  });

  it('should display output correctly when providing "addSuffix"', () => {
    expect(pipe.transform(new Date(2016, 0, 1), new Date(2015, 0, 1), {addSuffix: true}))
      .toBe('about 1 year ago');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(pipe.transform(new Date(2016, 7, 1), new Date(2015, 0, 1), {locale: esLocale}))
      .toBe('más de 1 año');
  });
});
