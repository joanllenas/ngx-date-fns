import { ChangeDetectorRef } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { FormatDistancePipe } from './format-distance.pipe';
import { es } from 'date-fns/locale';

describe('FormatDistancePipe', () => {
  let pipe: FormatDistancePipe;

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
    pipe = new FormatDistancePipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    );
  });

  it('should display the distance between 2 July 2014 and 1 January 2015', () => {
    expect(pipe.transform(new Date(2014, 6, 2), new Date(2015, 0, 1))).toBe(
      '6 months'
    );
  });

  it('should display the distance between 1 January 2015 00:00:15 and 1 January 2015 00:00:00, including seconds', () => {
    expect(
      pipe.transform(
        new Date(2015, 0, 1, 0, 0, 15),
        new Date(2015, 0, 1, 0, 0, 0),
        { includeSeconds: true }
      )
    ).toBe('less than 20 seconds');
  });

  it('should display the distance from 1 January 2016 to 1 January 2015, with a suffix', () => {
    expect(
      pipe.transform(new Date(2015, 0, 1), new Date(2016, 0, 1), {
        addSuffix: true
      })
    ).toBe('about 1 year ago');
  });

  it('should display the distance between 1 August 2016 and 1 January 2015 in Spanish', () => {
    expect(
      pipe.transform(new Date(2016, 7, 1), new Date(2015, 0, 1), {
        locale: es
      })
    ).toBe('más de 1 año');
  });
});
