import { ChangeDetectorRef } from '@angular/core';
import { es } from 'date-fns/locale';
import { DateFnsConfigurationService } from '../date-fns-configuration.service';
import { nullOrUndefinedDateReturnsEmptyStringTest } from '../test-utils';
import { FormatRelativeToNowPipe } from './format-relative-to-now.pipe';
import { FormatRelativeToNowPurePipe } from './format-relative-to-now.pure.pipe';

describe('FormatRelativeToNowPipe', () => {
  let pipe: FormatRelativeToNowPipe;

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
    return new FormatRelativeToNowPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    );
  };

  beforeEach(() => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    pipe = createPipe();
  });
  afterEach(() => {
    jasmine.clock().uninstall();
  });

  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [null]);
  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [undefined]);

  it('should display distance to the previous 6th day', () => {
    const now = new Date(2015, 0, 10, 4, 30, 0);
    jasmine.clock().mockDate(now);
    expect(pipe.transform(new Date(2015, 0, 4, 4, 30, 0))).toBe(
      'last Sunday at 4:30 AM'
    );
  });

  it('should display distance to the previous day', () => {
    const now = new Date(2015, 0, 10, 4, 30, 0);
    jasmine.clock().mockDate(now);
    expect(pipe.transform(new Date(2015, 0, 9, 4, 30, 0))).toBe(
      'yesterday at 4:30 AM'
    );
  });

  it('should display for the same day', () => {
    const now = new Date(2015, 0, 10, 4, 30, 0);
    jasmine.clock().mockDate(now);
    expect(pipe.transform(new Date(2015, 0, 10, 4, 30, 0))).toBe(
      'today at 4:30 AM'
    );
  });

  it('should display distance to the next day', () => {
    const now = new Date(2015, 0, 10, 4, 30, 0);
    jasmine.clock().mockDate(now);
    expect(pipe.transform(new Date(2015, 0, 11, 4, 30, 0))).toBe(
      'tomorrow at 4:30 AM'
    );
  });

  it('should display distance to next 6th day', () => {
    const now = new Date(2015, 0, 12, 4, 30, 0);
    jasmine.clock().mockDate(now);
    expect(pipe.transform(new Date(2015, 0, 18, 4, 30, 0))).toBe(
      'Sunday at 4:30 AM'
    );
  });

  it('should display other dates as formatted', () => {
    const now = new Date(2015, 6, 1, 4, 30, 0);
    jasmine.clock().mockDate(now);
    expect(pipe.transform(new Date(2015, 0, 1, 4, 30, 0))).toBe('01/01/2015');
  });

  it('should display output correctly when providing "locale"', () => {
    const now = new Date(2015, 0, 2);
    jasmine.clock().mockDate(now);
    expect(
      pipe.transform(new Date(2015, 0, 1), {
        locale: es
      })
    ).toBe('ayer a las 00:00');
  });
});

describe('FormatRelativeToNowPipe Pure', () => {
  const createPipe = () =>
    new FormatRelativeToNowPurePipe(new DateFnsConfigurationService());

  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [null]);
  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [undefined]);

  it('should display for the same day', () => {
    const now = new Date(2015, 0, 10, 4, 30, 0);
    jasmine.clock().mockDate(now);
    expect(createPipe().transform(new Date(2015, 0, 10, 4, 30, 0))).toBe(
      'today at 4:30 AM'
    );
  });

  it('should display output correctly when providing "locale"', () => {
    const now = new Date(2015, 0, 1);
    jasmine.clock().mockDate(now);
    expect(
      createPipe().transform(new Date(2015, 0, 1), {
        locale: es
      })
    ).toBe('hoy a las 00:00');
  });

  it('should display output correctly when providing "locale" via config', () => {
    const now = new Date(2015, 0, 1);
    jasmine.clock().mockDate(now);
    const conf = new DateFnsConfigurationService();
    conf.setLocale(es);
    const pipe = new FormatRelativeToNowPurePipe(conf);
    expect(pipe.transform(new Date(2015, 0, 1))).toBe('hoy a las 00:00');
  });
});
