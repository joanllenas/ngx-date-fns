import { DateFnsWeekIndex, DateFnsFirstWeekDays } from './types';
import { removePipe } from './test-utils';
import { StartOfDecadePipe } from './start-of-decade.pipe';
import { StartOfWeekYearPipe } from './start-of-week-year.pipe';
import { StartOfDayPipe } from './start-of-day.pipe';
import { StartOfHourPipe } from './start-of-hour.pipe';
import { StartOfISOWeekPipe } from './start-of-iso-week.pipe';
import { StartOfISOWeekYearPipe } from './start-of-iso-week-year.pipe';
import { StartOfMinutePipe } from './start-of-minute.pipe';
import { StartOfMonthPipe } from './start-of-month.pipe';
import { StartOfQuarterPipe } from './start-of-quarter.pipe';
import { StartOfSecondPipe } from './start-of-second.pipe';
import { StartOfWeekPipe } from './start-of-week.pipe';
import { StartOfYearPipe } from './start-of-year.pipe';
import { ChangeDetectorRef } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { es, enUS } from 'date-fns/locale';

[
  {
    pipe: new StartOfDayPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 2, 0, 0, 0)
  },
  {
    pipe: new StartOfDecadePipe(),
    date: new Date(2015, 9, 21, 0, 0, 0),
    expected: new Date(2010, 0, 1)
  },
  {
    pipe: new StartOfHourPipe(),
    date: new Date(2014, 8, 2, 11, 55),
    expected: new Date(2014, 8, 2, 11, 0)
  },
  {
    pipe: new StartOfISOWeekPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 1, 0, 0, 0)
  },
  {
    pipe: new StartOfISOWeekYearPipe(),
    date: new Date(2005, 6, 2),
    expected: new Date(2005, 0, 3, 0, 0, 0)
  },
  {
    pipe: new StartOfMinutePipe(),
    date: new Date(2014, 11, 1, 22, 15, 45, 400),
    expected: new Date(2014, 11, 1, 22, 15, 0, 0)
  },
  {
    pipe: new StartOfMonthPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 1, 0, 0, 0)
  },
  {
    pipe: new StartOfQuarterPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 6, 1, 0, 0, 0)
  },
  {
    pipe: new StartOfSecondPipe(),
    date: new Date(2014, 11, 1, 22, 15, 45, 400),
    expected: new Date(2014, 11, 1, 22, 15, 45, 0)
  },
  {
    pipe: new StartOfYearPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 0, 1, 0, 0, 0)
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`${removePipe(test.pipe.constructor.name)} of ${
      test.date
    } should be ${test.expected.toLocaleString()}`, () => {
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
  // StartOfWeekYearPipe
  {
    pipe: new StartOfWeekYearPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2005, 6, 2),
    options: undefined,
    expected: new Date(2004, 11, 26)
  },
  {
    pipe: new StartOfWeekYearPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2005, 6, 2),
    options: {
      weekStartsOn: 1 as DateFnsWeekIndex,
      firstWeekContainsDate: 4 as DateFnsFirstWeekDays
    },
    expected: new Date(2005, 0, 3)
  },
  {
    pipe: new StartOfWeekYearPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2005, 6, 2),
    options: {
      locale: es
    },
    expected: new Date(2004, 11, 27)
  },
  {
    pipe: new StartOfWeekYearPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2005, 6, 2),
    options: {
      locale: enUS
    },
    expected: new Date(2004, 11, 26)
  },
  // StartOfWeekPipe
  {
    pipe: new StartOfWeekPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2014, 8, 2, 11, 55, 0),
    options: undefined,
    expected: new Date(2014, 7, 31, 0, 0, 0, 0)
  },
  {
    pipe: new StartOfWeekPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2014, 8, 2, 11, 55, 0),
    options: { weekStartsOn: 1 as DateFnsWeekIndex },
    expected: new Date(2014, 8, 1, 0, 0, 0, 0)
  },
  {
    pipe: new StartOfWeekPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2014, 8, 2, 11, 55, 0),
    options: { locale: es },
    expected: new Date(2014, 8, 1, 0, 0, 0, 0)
  },
  {
    pipe: new StartOfWeekPipe(
      new DateFnsConfigurationService(),
      new MyChangeDetector()
    ),
    date: new Date(2014, 8, 2, 11, 55, 0),
    options: { locale: enUS },
    expected: new Date(2014, 7, 31, 0, 0, 0, 0)
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`${removePipe(test.pipe.constructor.name)} of ${
      test.date
    } should be ${test.expected.toLocaleString()}`, () => {
      expect(test.pipe.transform(test.date, test.options)).toEqual(
        test.expected
      );
    });
  });
});
