import { EndOfDayPipe } from './end-of-day.pipe';
import { EndOfHourPipe } from './end-of-hour.pipe';
import { EndOfISOWeekPipe } from './end-of-iso-week.pipe';
import { EndOfISOWeekYearPipe } from './end-of-iso-week-year.pipe';
import { EndOfMinutePipe } from './end-of-minute.pipe';
import { EndOfMonthPipe } from './end-of-month.pipe';
import { EndOfQuarterPipe } from './end-of-quarter.pipe';
import { EndOfSecondPipe } from './end-of-second.pipe';
import { EndOfTodayPipe } from './end-of-today.pipe';
import { EndOfTomorrowPipe } from './end-of-tomorrow.pipe';
import { EndOfYesterdayPipe } from './end-of-yesterday.pipe';
import { EndOfWeekPipe } from './end-of-week.pipe';
import { DateFnsWeekIndex } from './types';
import { EndOfYearPipe } from './end-of-year.pipe';
import { removePipe } from './test-utils';

[
  {
    pipe: new EndOfDayPipe(),
    date: new Date(2014, 8, 2, 11, 55),
    expected: new Date(2014, 8, 2, 23, 59, 59, 999)
  },
  {
    pipe: new EndOfHourPipe(),
    date: new Date(2014, 8, 2, 11, 55),
    expected: new Date(2014, 8, 2, 11, 59, 59, 999)
  },
  {
    pipe: new EndOfISOWeekPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 7, 23, 59, 59, 999)
  },
  {
    pipe: new EndOfISOWeekYearPipe(),
    date: new Date(2005, 6, 2),
    expected: new Date(2006, 0, 1, 23, 59, 59, 999)
  },
  {
    pipe: new EndOfMinutePipe(),
    date: new Date(2014, 11, 1, 22, 15, 45, 400),
    expected: new Date(2014, 11, 1, 22, 15, 59, 999)
  },
  {
    pipe: new EndOfMonthPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 30, 23, 59, 59, 999)
  },
  {
    pipe: new EndOfQuarterPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 30, 23, 59, 59, 999)
  },
  {
    pipe: new EndOfSecondPipe(),
    date: new Date(2014, 11, 1, 22, 15, 45, 400),
    expected: new Date(2014, 11, 1, 22, 15, 45, 999)
  },
  {
    pipe: new EndOfWeekPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 6, 23, 59, 59, 999)
  },
  {
    pipe: new EndOfWeekPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 7, 23, 59, 59, 999),
    options: { weekStartsOn: 1 as DateFnsWeekIndex }
  },
  {
    pipe: new EndOfYearPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 11, 31, 23, 59, 59, 999)
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`should display the ${removePipe(test.pipe.constructor.name)} of ${
      test.date
    }`, () => {
      if (test.options) {
        expect(test.pipe.transform(test.date, test.options)).toEqual(
          test.expected
        );
      } else {
        expect(test.pipe.transform(test.date)).toEqual(test.expected);
      }
    });
  });
});

// Without date param
[
  {
    pipe: new EndOfTodayPipe(),
    expected: new Date(2014, 9, 6, 23, 59, 59, 999)
  },
  {
    pipe: new EndOfTomorrowPipe(),
    expected: new Date(2014, 9, 7, 23, 59, 59, 999)
  },
  {
    pipe: new EndOfYesterdayPipe(),
    expected: new Date(2014, 9, 5, 23, 59, 59, 999)
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    beforeEach(() => {
      jasmine.clock().uninstall();
      jasmine.clock().install();
      jasmine.clock().mockDate(new Date(2014, 9, 6));
    });
    afterEach(() => {
      jasmine.clock().uninstall();
    });
    it(`should display the ${removePipe(test.pipe.constructor.name)}`, () => {
      expect(test.pipe.transform()).toEqual(test.expected);
    });
  });
});
