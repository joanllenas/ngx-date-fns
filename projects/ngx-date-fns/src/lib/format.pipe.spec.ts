import { FormatPipe } from './format.pipe';
import { es } from 'date-fns/locale';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { ChangeDetectorRef } from '@angular/core';

describe('FormatPipe', () => {
  let pipe: FormatPipe;

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
    pipe = new FormatPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    );
  });

  it('should Represent 11 February 2014 in middle-endian format', () => {
    expect(pipe.transform(new Date(2014, 1, 11), 'MM/dd/yyyy')).toBe(
      '02/11/2014'
    );
  });

  it('should display output correctly when providing "locale"', () => {
    expect(
      pipe.transform(new Date(2014, 6, 2), `do 'de' MMMM yyyy`, {
        locale: es
      })
    ).toBe('2º de julio 2014');
  });

  it('should escape string by single quote character', () => {
    expect(pipe.transform(new Date(2014, 6, 2, 15), `h 'o''clock'`)).toBe(
      `3 o'clock`
    );
  });
});
