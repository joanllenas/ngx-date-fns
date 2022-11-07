import { ChangeDetectorRef } from '@angular/core';
import { es } from 'date-fns/locale';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { FormatRelativePipe } from './format-relative.pipe';
import { FormatRelativePurePipe } from './format-relative.pure.pipe';
import { nullOrUndefinedDateReturnsEmptyStringTest } from './test-utils';

describe('FormatRelativePipe', () => {
  let pipe: FormatRelativePipe;

  const createPipe = () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
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
    return new FormatRelativePipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    );
  };

  beforeEach(() => {
    pipe = createPipe();
  });

  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [null]);
  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [undefined]);

  it('should display distance to the previous 6th day', () => {
    expect(
      pipe.transform(
        new Date(2015, 0, 4, 4, 30, 0),
        new Date(2015, 0, 10, 4, 30, 0)
      )
    ).toBe('last Sunday at 4:30 AM');
  });

  it('should display distance to the previous day', () => {
    expect(
      pipe.transform(
        new Date(2015, 0, 9, 4, 30, 0),
        new Date(2015, 0, 10, 4, 30, 0)
      )
    ).toBe('yesterday at 4:30 AM');
  });

  it('should display for the same day', () => {
    expect(
      pipe.transform(
        new Date(2015, 0, 10, 4, 30, 0),
        new Date(2015, 0, 10, 4, 30, 0)
      )
    ).toBe('today at 4:30 AM');
  });

  it('should display distance to the next day', () => {
    expect(
      pipe.transform(
        new Date(2015, 0, 11, 4, 30, 0),
        new Date(2015, 0, 10, 4, 30, 0)
      )
    ).toBe('tomorrow at 4:30 AM');
  });

  it('should display distance to next 6th day', () => {
    expect(
      pipe.transform(
        new Date(2015, 0, 18, 4, 30, 0),
        new Date(2015, 0, 12, 4, 30, 0)
      )
    ).toBe('Sunday at 4:30 AM');
  });

  it('should display other dates as formatted', () => {
    expect(
      pipe.transform(
        new Date(2015, 0, 1, 4, 30, 0),
        new Date(2015, 6, 1, 4, 30, 0)
      )
    ).toBe('01/01/2015');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(
      pipe.transform(new Date(2015, 0, 1), new Date(2015, 0, 2), {
        locale: es
      })
    ).toBe('ayer a las 00:00');
  });
});

describe('FormatRelativePipe Pure', () => {
  const createPipe = () =>
    new FormatRelativePurePipe(new DateFnsConfigurationService());

  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [null]);
  nullOrUndefinedDateReturnsEmptyStringTest(createPipe(), [undefined]);

  it('should display for the same day', () => {
    expect(
      createPipe().transform(
        new Date(2015, 0, 10, 4, 30, 0),
        new Date(2015, 0, 10, 4, 30, 0)
      )
    ).toBe('today at 4:30 AM');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(
      createPipe().transform(new Date(2015, 0, 1), new Date(2015, 0, 1), {
        locale: es
      })
    ).toBe('hoy a las 00:00');
  });

  it('should display output correctly when providing "locale" via config', () => {
    const conf = new DateFnsConfigurationService();
    conf.setLocale(es);
    const pipe = new FormatRelativePurePipe(conf);
    expect(pipe.transform(new Date(2015, 0, 1), new Date(2015, 0, 1))).toBe(
      'hoy a las 00:00'
    );
  });
});
