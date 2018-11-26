


import { DistanceInWordsStrictPipe } from './distance-in-words-strict.pipe';
import * as esLocale from 'date-fns/locale/es/index.js';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { ChangeDetectorRef } from '@angular/core';

describe('DistanceInWordsStrictPipe', () => {
  let pipe: DistanceInWordsStrictPipe;

  beforeEach(() => {
    const MyChangeDetector = class extends ChangeDetectorRef {
      markForCheck(): void {
        throw new Error("Method not implemented.");
      }
      detach(): void {
        throw new Error("Method not implemented.");
      }
      detectChanges(): void {
        throw new Error("Method not implemented.");
      }
      checkNoChanges(): void {
        throw new Error("Method not implemented.");
      }
      reattach(): void {
        throw new Error("Method not implemented.");
      }
    }
    pipe = new DistanceInWordsStrictPipe(new DateFnsConfigurationService(), new MyChangeDetector())
  });

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined, undefined))
        .toThrowError(Error, DistanceInWordsStrictPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2), new Date(2015, 0, 2)))
      .toBe('6 months');
    expect(pipe.transform(new Date(2015, 0, 1, 0, 0, 15), new Date(2015, 0, 1, 0, 0, 0)))
      .toBe('15 seconds');
  });

  it('should display output correctly when providing "addSuffix"', () => {
    expect(pipe.transform(new Date(2016, 0, 1), new Date(2015, 0, 1), {addSuffix: true}))
      .toBe('1 year ago');
  });

  it('should display output correctly when providing "unit"', () => {
    expect(pipe.transform(new Date(2016, 0, 1), new Date(2015, 0, 1), {unit: 'm'}))
      .toBe('525600 minutes');
  });

  it('should display output correctly when providing "unit" and "partialMethod"', () => {
    expect(pipe.transform(new Date(2015, 0, 28), new Date(2015, 0, 1), {unit: 'M', partialMethod: 'ceil'}))
      .toBe('1 month');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(pipe.transform(new Date(2016, 7, 1), new Date(2015, 0, 1), {locale: esLocale}))
      .toBe('1 año');
  });
});
