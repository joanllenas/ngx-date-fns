import { ChangeDetectorRef } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { es } from 'date-fns/locale';
import { FormatDistanceToNowPipe } from './format-distance-to-now.pipe';
import { FormatDistanceToNowPurePipe } from './format-distance-to-now.pure.pipe';
import { nullOrUndefinedDateReturnsEmptyStringTest } from './test-utils';

describe('FormatDistanceToNowPipe', () => {
  let pipe: FormatDistanceToNowPipe;

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
    return new FormatDistanceToNowPipe(
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
    expect(pipe.transform(new Date(2016, 7, 1), { locale: es })).toBe(
      'más de 1 año'
    );
  });

  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [null]);
  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [undefined]);
});

describe('FormatDistanceToNowPipe Pure', () => {
  beforeEach(() => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2015, 0, 1));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  nullOrUndefinedDateReturnsEmptyStringTest(
    new FormatDistanceToNowPurePipe(new DateFnsConfigurationService()),
    [null]
  );
  nullOrUndefinedDateReturnsEmptyStringTest(
    new FormatDistanceToNowPurePipe(new DateFnsConfigurationService()),
    [undefined]
  );

  it('should display output correctly', () => {
    const pipe = new FormatDistanceToNowPurePipe(
      new DateFnsConfigurationService()
    );
    expect(pipe.transform(new Date(2014, 6, 2))).toBe('6 months');
  });

  it('should display output correctly when providing "locale" via config', () => {
    const conf = new DateFnsConfigurationService();
    conf.setLocale(es);
    const pipe = new FormatDistanceToNowPurePipe(conf);
    expect(pipe.transform(new Date(2016, 7, 1))).toBe('más de 1 año');
  });
});
