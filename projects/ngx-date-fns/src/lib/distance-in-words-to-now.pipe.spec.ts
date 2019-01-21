import { DistanceInWordsToNowPipe } from './distance-in-words-to-now.pipe';
import * as esLocale from 'date-fns/locale/es/index.js';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { ChangeDetectorRef } from '@angular/core';

describe('DistanceInWordsToNowPipe', () => {
  let pipe: DistanceInWordsToNowPipe;

  beforeEach(() => {
    const MyChangeDetector = class extends ChangeDetectorRef {
      markForCheck(): void {
        throw new Error('Method not implemented.');
      }
      detach(): void {
        throw new Error('Method not implemented.');
      }
      detectChanges(): void {
        throw new Error('Method not implemented.');
      }
      checkNoChanges(): void {
        throw new Error('Method not implemented.');
      }
      reattach(): void {
        throw new Error('Method not implemented.');
      }
    };
    pipe = new DistanceInWordsToNowPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    );
    jasmine.clock().uninstall();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2015, 0, 1));
  });

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      DistanceInWordsToNowPipe.NO_ARGS_ERROR
    );
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2))).toBe('6 months');
  });

  it('should display output correctly when providing "includeSeconds"', () => {
    expect(
      pipe.transform(new Date(2015, 0, 1, 0, 0, 15), { includeSeconds: true })
    ).toBe('less than 20 seconds');
  });

  it('should display output correctly when providing "addSuffix"', () => {
    expect(pipe.transform(new Date(2016, 0, 1), { addSuffix: true })).toBe(
      'in about 1 year'
    );
  });

  it('should display output correctly when providing "locale"', () => {
    expect(pipe.transform(new Date(2016, 7, 1), { locale: esLocale })).toBe(
      'más de 1 año'
    );
  });
});
