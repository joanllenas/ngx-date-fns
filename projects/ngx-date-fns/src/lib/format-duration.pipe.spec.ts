import { ChangeDetectorRef } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { FormatDurationPipe } from './format-duration.pipe';
import { es } from 'date-fns/locale';
import { FormatDurationPurePipe } from './format-duration.pure.pipe';

describe('FormatDurationPipe', () => {
  let pipe: FormatDurationPipe;

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
    return new FormatDurationPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    );
  };

  beforeEach(() => {
    pipe = createPipe();
  });

  it('should format full durations', () => {
    expect(
      pipe.transform({
        years: 2,
        months: 9,
        weeks: 1,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30
      })
    ).toBe('2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds');
  });

  it('should format partial durations', () => {
    expect(pipe.transform({ months: 9, days: 2 })).toBe('9 months 2 days');
  });

  it('should customize the format', () => {
    expect(
      pipe.transform(
        {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        },
        { format: ['months', 'weeks'] }
      )
    ).toBe('9 months 1 week');
  });

  it('should customize the zeroes presence', () => {
    expect(pipe.transform({ years: 0, months: 9 }, { zero: true })).toBe(
      '0 years 9 months'
    );
  });

  it('should customize the delimiter', () => {
    expect(
      pipe.transform({ years: 2, months: 9, weeks: 3 }, { delimiter: ', ' })
    ).toBe('2 years, 9 months, 3 weeks');
  });

  it('should customize the locale', () => {
    expect(
      pipe.transform({ years: 2, months: 9, weeks: 3 }, { locale: es })
    ).toBe('2 años 9 meses 3 semanas');
  });
});

describe('FormatDurationPipe Pure', () => {
  const createPipe = () =>
    new FormatDurationPurePipe(new DateFnsConfigurationService());

  it('should format full durations', () => {
    expect(
      createPipe().transform({
        years: 2,
        months: 9,
        weeks: 1,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30
      })
    ).toBe('2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds');
  });

  it('should format partial durations', () => {
    expect(createPipe().transform({ months: 9, days: 2 })).toBe(
      '9 months 2 days'
    );
  });

  it('should customize the format', () => {
    expect(
      createPipe().transform(
        {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        },
        { format: ['months', 'weeks'] }
      )
    ).toBe('9 months 1 week');
  });

  it('should customize the zeroes presence', () => {
    expect(
      createPipe().transform({ years: 0, months: 9 }, { zero: true })
    ).toBe('0 years 9 months');
  });

  it('should customize the delimiter', () => {
    expect(
      createPipe().transform(
        { years: 2, months: 9, weeks: 3 },
        { delimiter: ', ' }
      )
    ).toBe('2 years, 9 months, 3 weeks');
  });

  it('should customize the locale', () => {
    expect(
      createPipe().transform({ years: 2, months: 9, weeks: 3 }, { locale: es })
    ).toBe('2 años 9 meses 3 semanas');
  });

  it('should customize the locale provided via config', () => {
    const conf = new DateFnsConfigurationService();
    conf.setLocale(es);
    const pipe = new FormatDurationPurePipe(conf);
    expect(pipe.transform({ years: 2, months: 9, weeks: 3 })).toBe(
      '2 años 9 meses 3 semanas'
    );
  });
});
