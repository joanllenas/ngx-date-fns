import { ChangeDetectorRef } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { es } from 'date-fns/locale';
import { FormatDistanceStrictPipe } from './format-distance-strict.pipe';

describe('FormatDistanceStrictPipe', () => {
  let pipe: FormatDistanceStrictPipe;

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
    pipe = new FormatDistanceStrictPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    );
  });

  it('should display the distance between 2 July 2014 and 1 January 2015', () => {
    expect(pipe.transform(new Date(2014, 6, 2), new Date(2015, 0, 2))).toBe(
      '6 months'
    );
  });

  it('should display the distance between 1 January 2015 00:00:15 and 1 January 2015 00:00:00', () => {
    expect(
      pipe.transform(
        new Date(2015, 0, 1, 0, 0, 15),
        new Date(2015, 0, 1, 0, 0, 0)
      )
    ).toBe('15 seconds');
  });

  it('should display the distance from 1 January 2016 to 1 January 2015, with a suffix', () => {
    expect(
      pipe.transform(new Date(2015, 0, 1), new Date(2016, 0, 1), {
        addSuffix: true
      })
    ).toBe('1 year ago');
  });

  it('should display the distance from 1 January 2016 to 1 January 2015, in minutes', () => {
    expect(
      pipe.transform(new Date(2016, 0, 1), new Date(2015, 0, 1), {
        unit: 'minute'
      })
    ).toBe('525600 minutes');
  });

  it('should display the distance from 1 January 2015 to 28 January 2015, in months, rounded up', () => {
    expect(
      pipe.transform(new Date(2015, 0, 28), new Date(2015, 0, 1), {
        unit: 'month',
        roundingMethod: 'ceil'
      })
    ).toBe('1 month');
  });

  it('should display the distance between 1 August 2016 and 1 January 2015 in Spanish', () => {
    expect(
      pipe.transform(new Date(2016, 7, 1), new Date(2015, 0, 1), {
        locale: es,
        roundingMethod: 'floor'
      })
    ).toBe('1 año');
  });
});
