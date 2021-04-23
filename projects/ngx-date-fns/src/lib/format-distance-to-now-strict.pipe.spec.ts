import { ChangeDetectorRef } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { es } from 'date-fns/locale';
import { FormatDistanceToNowStrictPipe } from './format-distance-to-now-strict.pipe';
import { FormatDistanceToNowStrictPurePipe } from './format-distance-to-now-strict.pure.pipe';
import { nullOrUndefinedDateReturnsEmptyStringTest } from './test-utils';

describe('FormatDistanceToNowStrictPipe', () => {
  let pipe: FormatDistanceToNowStrictPipe;

  const createPipe = () => {
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
    return new FormatDistanceToNowStrictPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    );
  };

  beforeEach(() => {
    pipe = createPipe();
    jasmine.clock().uninstall();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2015, 0, 1));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2))).toBe('6 months');
  });

  it('should display the distance between 1 January 2015 00:00:15 and 1 January 2015 00:00:00', () => {
    expect(pipe.transform(new Date(2015, 0, 1, 0, 0, 15))).toBe('15 seconds');
  });

  it('should display output correctly when providing "addSuffix"', () => {
    expect(pipe.transform(new Date(2016, 0, 1), { addSuffix: true })).toBe(
      'in 1 year'
    );
  });

  it('should display the distance from 1 January 2016 to 1 January 2015, in minutes', () => {
    expect(
      pipe.transform(new Date(2016, 0, 1), {
        unit: 'minute'
      })
    ).toBe('525600 minutes');
  });

  it('should display the distance from 1 January 2015 to 28 January 2015, in months, rounded up', () => {
    expect(
      pipe.transform(new Date(2015, 0, 28), {
        unit: 'month',
        roundingMethod: 'ceil'
      })
    ).toBe('1 month');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(pipe.transform(new Date(2016, 7, 1), { locale: es })).toBe('2 años');
  });

  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [null]);
  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [undefined]);
});

describe('FormatDistanceToNowStrictPipe Pure', () => {
  beforeEach(() => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2015, 0, 1));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  nullOrUndefinedDateReturnsEmptyStringTest(
    new FormatDistanceToNowStrictPurePipe(new DateFnsConfigurationService()),
    [null]
  );
  nullOrUndefinedDateReturnsEmptyStringTest(
    new FormatDistanceToNowStrictPurePipe(new DateFnsConfigurationService()),
    [undefined]
  );

  it('should display output correctly', () => {
    const pipe = new FormatDistanceToNowStrictPurePipe(
      new DateFnsConfigurationService()
    );
    expect(pipe.transform(new Date(2014, 6, 2))).toBe('6 months');
  });

  it('should display output correctly when providing "locale" via config', () => {
    const conf = new DateFnsConfigurationService();
    conf.setLocale(es);
    const pipe = new FormatDistanceToNowStrictPurePipe(conf);
    expect(pipe.transform(new Date(2016, 7, 1))).toBe('2 años');
  });
});
