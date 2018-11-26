


import { FormatPipe } from './format.pipe';
import * as esLocale from 'date-fns/locale/es/index.js';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { ChangeDetectorRef } from '@angular/core';

describe('FormatPipe', () => {
  let pipe: FormatPipe;

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
    pipe = new FormatPipe(new DateFnsConfigurationService(), new MyChangeDetector());
  });

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined))
      .toThrowError(Error, FormatPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 1, 11), 'MM/DD/YYYY'))
      .toBe('02/11/2014');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(pipe.transform(new Date(2014, 6, 2), 'Do [de] MMMM YYYY', {locale: esLocale}))
      .toBe('2º de julio 2014');
  });
});
