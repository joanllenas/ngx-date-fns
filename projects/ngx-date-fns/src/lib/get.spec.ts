import { removePipe } from './test-utils';
import { GetDatePipe } from './get-date.pipe';
import { GetDayOfYearPipe } from './get-day-of-year.pipe';
import { GetDayPipe } from './get-day.pipe';
import { GetDaysInMonthPipe } from './get-days-in-month.pipe';
import { GetDaysInYearPipe } from './get-days-in-year.pipe';
import { GetHoursPipe } from './get-hours.pipe';
import { GetISODayPipe } from './get-iso-day.pipe';
import { GetISOWeekPipe } from './get-iso-week.pipe';
import { GetISOWeeksInYearPipe } from './get-iso-weeks-in-year.pipe';
import { GetISOWeekYearPipe } from './get-iso-week-year.pipe';
import { GetMillisecondsPipe } from './get-milliseconds.pipe';
import { GetMinutesPipe } from './get-minutes.pipe';
import { GetMonthPipe } from './get-month.pipe';
import { GetQuarterPipe } from './get-quarter.pipe';
import { GetSecondsPipe } from './get-seconds.pipe';
import { GetTimePipe } from './get-time.pipe';
import { GetYearPipe } from './get-year.pipe';
import { GetUnixTimePipe } from './get-unix-time.pipe';
import { GetWeekPipe } from './get-week.pipe';
import { DateFnsWeekIndex, DateFnsFirstWeekDays } from './types';
import { GetWeekOfMonthPipe } from './get-week-of-month.pipe';
import { GetWeeksInMonthPipe } from './get-weeks-in-month.pipe';
import { GetDecadePipe } from './get-decade.pipe';
import { GetWeekYearPipe } from './get-week-year.pipe';
import { ChangeDetectorRef } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { es, enUS } from 'date-fns/locale';
import { GetWeekPurePipe } from './get-week.pure.pipe';
import { GetWeekOfMonthPurePipe } from './get-week-of-month.pure.pipe';
import { GetWeeksInMonthPurePipe } from './get-weeks-in-month.pure.pipe';
import { GetWeekYearPurePipe } from './get-week-year.pure.pipe';

[
  {
    pipe: new GetDatePipe(),
    date: new Date(2012, 1, 29),
    expected: 29
  },
  {
    pipe: new GetDayOfYearPipe(),
    date: new Date(2014, 6, 2),
    expected: 183
  },
  {
    pipe: new GetDayPipe(),
    date: new Date(2012, 1, 29),
    expected: 3
  },
  {
    pipe: new GetDaysInMonthPipe(),
    date: new Date(2000, 1),
    expected: 29
  },
  {
    pipe: new GetDaysInYearPipe(),
    date: new Date(2012, 0, 1),
    expected: 366
  },
  {
    pipe: new GetHoursPipe(),
    date: new Date(2012, 1, 29, 11, 45),
    expected: 11
  },
  {
    pipe: new GetISODayPipe(),
    date: new Date(2012, 1, 29),
    expected: 3
  },
  {
    pipe: new GetISOWeekPipe(),
    date: new Date(2005, 0, 2),
    expected: 53
  },
  {
    pipe: new GetISOWeeksInYearPipe(),
    date: new Date(2015, 1, 11),
    expected: 53
  },
  {
    pipe: new GetISOWeekYearPipe(),
    date: new Date(2005, 0, 2),
    expected: 2004
  },
  {
    pipe: new GetMillisecondsPipe(),
    date: new Date(2012, 1, 29, 11, 45, 5, 123),
    expected: 123
  },
  {
    pipe: new GetMinutesPipe(),
    date: new Date(2012, 1, 29, 11, 45, 5),
    expected: 45
  },
  {
    pipe: new GetMonthPipe(),
    date: new Date(2012, 1, 29),
    expected: 1
  },
  {
    pipe: new GetQuarterPipe(),
    date: new Date(2014, 6, 2),
    expected: 3
  },
  {
    pipe: new GetSecondsPipe(),
    date: new Date(2012, 1, 29, 11, 45, 5, 123),
    expected: 5
  },
  {
    pipe: new GetTimePipe(),
    date: new Date(1483228800000),
    expected: 1483228800000
  },
  {
    pipe: new GetUnixTimePipe(),
    date: new Date(1330512305000),
    expected: 1330512305
  },
  {
    pipe: new GetYearPipe(),
    date: new Date(2014, 6, 2),
    expected: 2014
  },
  {
    pipe: new GetDecadePipe(),
    date: new Date(1942, 10, 27),
    expected: 1940
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`should ${removePipe(test.pipe.constructor.name)} of ${
      test.date
    }`, () => {
      expect(test.pipe.transform(test.date)).toEqual(test.expected);
    });
  });
});

// Mock Change Detector
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

// With options
[
  // GetWeekPipe
  {
    pipe: new GetWeekPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2005, 0, 2),
    options: undefined,
    expected: 2
  },
  {
    pipe: new GetWeekPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2005, 0, 2),
    options: {
      weekStartsOn: 1 as DateFnsWeekIndex,
      firstWeekContainsDate: 4 as DateFnsFirstWeekDays
    },
    expected: 53
  },
  {
    pipe: new GetWeekPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2020, 1, 2),
    options: {
      locale: es
    },
    expected: 5
  },
  {
    pipe: new GetWeekPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2020, 1, 2),
    options: {
      locale: enUS
    },
    expected: 6
  },
  // GetWeekPurePipe
  {
    pipe: new GetWeekPurePipe(new DateFnsConfigurationService()),
    date: new Date(2005, 0, 2),
    expected: 2
  },
  {
    pipe: (() => {
      const conf = new DateFnsConfigurationService();
      conf.setLocale(es);
      return new GetWeekPurePipe(conf);
    })(),
    date: new Date(2020, 1, 2),
    expected: 5
  },
  // GetWeekOfMonthPipe
  {
    pipe: new GetWeekOfMonthPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2019, 0, 6),
    options: {
      weekStartsOn: 0 as DateFnsWeekIndex
    },
    expected: 2
  },
  {
    pipe: new GetWeekOfMonthPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2019, 0, 6),
    options: {
      weekStartsOn: 1 as DateFnsWeekIndex
    },
    expected: 1
  },
  {
    pipe: new GetWeekOfMonthPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2020, 1, 2),
    options: {
      locale: es
    },
    expected: 1
  },
  {
    pipe: new GetWeekOfMonthPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2020, 1, 2),
    options: {
      locale: enUS
    },
    expected: 2
  },
  // GetWeekOfMonthPurePipe
  {
    pipe: new GetWeekOfMonthPurePipe(new DateFnsConfigurationService()),
    date: new Date(2019, 0, 6),
    options: {
      weekStartsOn: 0 as DateFnsWeekIndex
    },
    expected: 2
  },
  {
    pipe: (() => {
      const conf = new DateFnsConfigurationService();
      conf.setLocale(es);
      return new GetWeekOfMonthPurePipe(conf);
    })(),
    date: new Date(2020, 1, 2),
    expected: 1
  },
  // GetWeeksInMonthPipe
  {
    pipe: new GetWeeksInMonthPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2015, 1, 8),
    options: undefined,
    expected: 4
  },
  {
    pipe: new GetWeeksInMonthPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2017, 6, 5),
    options: { weekStartsOn: 1 as DateFnsWeekIndex },
    expected: 6
  },
  {
    pipe: new GetWeeksInMonthPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2020, 2, 15),
    options: { locale: es },
    expected: 6
  },
  {
    pipe: new GetWeeksInMonthPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2020, 2, 15),
    options: { locale: enUS },
    expected: 5
  },
  // GetWeeksInMonthPipe
  {
    pipe: new GetWeeksInMonthPurePipe(new DateFnsConfigurationService()),
    date: new Date(2015, 1, 8),
    options: undefined,
    expected: 4
  },
  {
    pipe: (() => {
      const conf = new DateFnsConfigurationService();
      conf.setLocale(es);
      return new GetWeeksInMonthPurePipe(conf);
    })(),
    date: new Date(2020, 2, 15),
    expected: 6
  },
  // GetWeekYearPipe
  {
    pipe: new GetWeekYearPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2004, 11, 26),
    options: { weekStartsOn: 0 as DateFnsWeekIndex },
    expected: 2005
  },
  {
    pipe: new GetWeekYearPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2004, 11, 26),
    options: { weekStartsOn: 6 as DateFnsWeekIndex },
    expected: 2004
  },
  {
    pipe: new GetWeekYearPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2004, 11, 26),
    options: { firstWeekContainsDate: 4 as DateFnsFirstWeekDays },
    expected: 2004
  },
  {
    pipe: new GetWeekYearPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2004, 11, 26),
    options: { locale: es },
    expected: 2004
  },
  {
    pipe: new GetWeekYearPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2004, 11, 26),
    options: { locale: enUS },
    expected: 2005
  },
  // GetWeekYearPurePipe
  {
    pipe: new GetWeekYearPurePipe(new DateFnsConfigurationService()),
    date: new Date(2004, 11, 26),
    options: { weekStartsOn: 0 as DateFnsWeekIndex },
    expected: 2005
  },
  {
    pipe: (() => {
      const conf = new DateFnsConfigurationService();
      conf.setLocale(es);
      return new GetWeekYearPurePipe(conf);
    })(),
    date: new Date(2004, 11, 26),
    expected: 2004
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`should ${removePipe(test.pipe.constructor.name)} of ${
      test.date
    }`, () => {
      expect(test.pipe.transform(test.date, test.options)).toEqual(
        test.expected
      );
    });
  });
});
