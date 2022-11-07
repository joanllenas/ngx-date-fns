import { IsAfterPipe } from './is-after.pipe';
import { IsBeforePipe } from './is-before.pipe';
import { IsDatePipe } from './is-date.pipe';
import { IsEqualPipe } from './is-equal.pipe';
import { IsExistsPipe } from './is-exists.pipe';
import { IsFirstDayOfMonthPipe } from './is-first-day-of-month.pipe';
import { IsFridayPipe } from './is-friday.pipe';
import { IsFuturePipe } from './is-future.pipe';
import { IsLastDayOfMonthPipe } from './is-last-day-of-month.pipe';
import { IsLeapYearPipe } from './is-leap-year.pipe';
import { IsMondayPipe } from './is-monday.pipe';
import { IsPastPipe } from './is-past.pipe';
import { IsSameDayPipe } from './is-same-day.pipe';
import { IsSameHourPipe } from './is-same-hour.pipe';
import { IsSameISOWeekYearPipe } from './is-same-isoweek-year.pipe';
import { IsSameISOWeekPipe } from './is-same-isoweek.pipe';
import { IsSameMinutePipe } from './is-same-minute.pipe';
import { IsSameMonthPipe } from './is-same-month.pipe';
import { IsSameQuarterPipe } from './is-same-quarter.pipe';
import { IsSameSecondPipe } from './is-same-second.pipe';
import { IsSameYearPipe } from './is-same-year.pipe';
import { IsSaturdayPipe } from './is-saturday.pipe';
import { IsSundayPipe } from './is-sunday.pipe';
import { IsThisHourPipe } from './is-this-hour.pipe';
import { IsThisISOWeekPipe } from './is-this-isoweek.pipe';
import { IsThisMinutePipe } from './is-this-minute.pipe';
import { IsThisMonthPipe } from './is-this-month.pipe';
import { IsThisQuarterPipe } from './is-this-quarter.pipe';
import { IsThisSecondPipe } from './is-this-second.pipe';
import { IsThisYearPipe } from './is-this-year.pipe';
import { IsThursdayPipe } from './is-thursday.pipe';
import { IsTodayPipe } from './is-today.pipe';
import { IsTomorrowPipe } from './is-tomorrow.pipe';
import { IsTuesdayPipe } from './is-tuesday.pipe';
import { IsValidPipe } from './is-valid.pipe';
import { IsWednesdayPipe } from './is-wednesday.pipe';
import { IsWeekendPipe } from './is-weekend.pipe';
import { IsWithinIntervalPipe } from './is-within-interval.pipe';
import { IsYesterdayPipe } from './is-yesterday.pipe';
import { removePipe } from './test-utils';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function runFn(fn: () => any): any {
  return fn();
}

describe('Is..? ', () => {
  // One param
  [
    // IsDatePipe
    {
      pipe: new IsDatePipe(),
      date: () => ({ a: 'hola' }),
      expected: false
    },
    {
      pipe: new IsDatePipe(),
      date: () => new Date(2020, 0, 1),
      expected: true
    },

    // IsFuturePipe
    {
      pipe: new IsFuturePipe(),
      date: () => new Date(2099, 0, 1),
      expected: true
    },
    {
      pipe: new IsFuturePipe(),
      date: () => new Date(2020, 0, 1),
      expected: false
    },

    // IsPastPipe
    {
      pipe: new IsPastPipe(),
      date: () => new Date(2099, 0, 1),
      expected: false
    },
    {
      pipe: new IsPastPipe(),
      date: () => new Date(2020, 0, 1),
      expected: true
    },

    // IsValidPipe
    {
      pipe: new IsValidPipe(),
      date: () => new Date(2099, 0, 1),
      expected: true
    },
    {
      pipe: new IsValidPipe(),
      date: () => new Date(''),
      expected: false
    },

    // IsWeekendPipe
    {
      pipe: new IsWeekendPipe(),
      date: () => new Date(2020, 2, 29),
      expected: true
    },
    {
      pipe: new IsWeekendPipe(),
      date: () => new Date(2020, 2, 30),
      expected: false
    },
    // IsFirstDayOfMonthPipe
    {
      pipe: new IsFirstDayOfMonthPipe(),
      date: () => new Date(2020, 2, 30),
      expected: false
    },
    {
      pipe: new IsFirstDayOfMonthPipe(),
      date: () => new Date(2020, 2, 1),
      expected: true
    },
    // IsFridayPipe
    {
      pipe: new IsFridayPipe(),
      date: () => new Date(2020, 2, 20, 3),
      expected: true
    },
    {
      pipe: new IsFridayPipe(),
      date: () => new Date(2020, 2, 30),
      expected: false
    },
    // IsLastDayOfMonthPipe
    {
      pipe: new IsLastDayOfMonthPipe(),
      date: () => new Date(2014, 1, 28),
      expected: true
    },
    {
      pipe: new IsLastDayOfMonthPipe(),
      date: () => new Date(2021, 1, 27),
      expected: false
    },
    // IsLeapYearPipe
    {
      pipe: new IsLeapYearPipe(),
      date: () => new Date(2012, 8, 1),
      expected: true
    },
    {
      pipe: new IsLeapYearPipe(),
      date: () => new Date(2021, 8, 1),
      expected: false
    },
    // IsMondayPipe
    {
      pipe: new IsMondayPipe(),
      date: () => new Date(2014, 9, 12),
      expected: false
    },
    {
      pipe: new IsMondayPipe(),
      date: () => new Date(2014, 9, 13),
      expected: true
    },
    // IsSaturdayPipe
    {
      pipe: new IsSaturdayPipe(),
      date: () => new Date(2014, 9, 18),
      expected: true
    },
    {
      pipe: new IsSaturdayPipe(),
      date: () => new Date(2014, 9, 15),
      expected: false
    },
    // IsSundayPipe
    {
      pipe: new IsSundayPipe(),
      date: () => new Date(2014, 9, 19),
      expected: true
    },
    {
      pipe: new IsSundayPipe(),
      date: () => new Date(2014, 9, 16),
      expected: false
    },
    // IsThisHourPipe
    {
      pipe: new IsThisHourPipe(),
      date: () => new Date(),
      expected: true
    },
    {
      pipe: new IsThisHourPipe(),
      date: () =>
        runFn(() => {
          const date = new Date();
          date.setHours(date.getHours() - 2);
          return date;
        }),
      expected: false
    },
    // IsThisISOWeekPipe
    {
      pipe: new IsThisISOWeekPipe(),
      date: () => new Date(),
      expected: true
    },
    {
      pipe: new IsThisISOWeekPipe(),
      date: () =>
        runFn(() => {
          const date = new Date();
          date.setDate(date.getDate() - 8);
          return date;
        }),
      expected: false
    },
    // IsThisMinutePipe
    {
      pipe: new IsThisMinutePipe(),
      date: () => new Date(),
      expected: true
    },
    {
      pipe: new IsThisMinutePipe(),
      date: () =>
        runFn(() => {
          const date = new Date();
          date.setMinutes(date.getMinutes() - 1);
          return date;
        }),
      expected: false
    },
    // IsThisMonthPipe
    {
      pipe: new IsThisMonthPipe(),
      date: () => new Date(),
      expected: true
    },
    {
      pipe: new IsThisMonthPipe(),
      date: () =>
        runFn(() => {
          const date = new Date();
          date.setMonth(date.getMonth() - 1);
          return date;
        }),
      expected: false
    },
    // IsThisQuarterPipe
    {
      pipe: new IsThisQuarterPipe(),
      date: () => new Date(),
      expected: true
    },
    {
      pipe: new IsThisQuarterPipe(),
      date: () =>
        runFn(() => {
          const date = new Date();
          date.setMonth(date.getMonth() - 4);
          return date;
        }),
      expected: false
    },
    // IsThisSecondPipe
    {
      pipe: new IsThisSecondPipe(),
      date: () => new Date(),
      expected: true
    },
    {
      pipe: new IsThisSecondPipe(),
      date: () =>
        runFn(() => {
          const date = new Date();
          date.setSeconds(date.getSeconds() - 2);
          return date;
        }),
      expected: false
    },
    // IsThisYearPipe
    {
      pipe: new IsThisYearPipe(),
      date: () => new Date(),
      expected: true
    },
    {
      pipe: new IsThisYearPipe(),
      date: () => new Date(2001, 10, 20),
      expected: false
    },
    // IsThursdayPipe
    {
      pipe: new IsThursdayPipe(),
      date: () => new Date(2021, 9, 21),
      expected: true
    },
    {
      pipe: new IsThursdayPipe(),
      date: () => new Date(2021, 9, 20),
      expected: false
    },
    // IsTodayPipe
    { pipe: new IsTodayPipe(), date: () => new Date(), expected: true },
    {
      pipe: new IsTodayPipe(),
      date: () => new Date(2020, 2, 30),
      expected: false
    },
    // IsTomorrowPipe
    {
      pipe: new IsTomorrowPipe(),
      date: () =>
        runFn(() => {
          const date = new Date();
          date.setDate(date.getDate() + 1);
          return date;
        }),
      expected: true
    },
    {
      pipe: new IsTomorrowPipe(),
      date: () => new Date(2020, 2, 30),
      expected: false
    },
    // IsTuesdayPipe
    {
      pipe: new IsTuesdayPipe(),
      date: () => new Date(2021, 9, 19),
      expected: true
    },
    {
      pipe: new IsTuesdayPipe(),
      date: () => new Date(2021, 9, 18),
      expected: false
    },
    // IsWednesdayPipe
    {
      pipe: new IsWednesdayPipe(),
      date: () => new Date(2021, 9, 20),
      expected: true
    },
    {
      pipe: new IsWednesdayPipe(),
      date: () => new Date(2021, 9, 19),
      expected: false
    },
    // IsYesterdayPipe
    {
      pipe: new IsYesterdayPipe(),
      date: () => new Date(2020, 2, 30),
      expected: false
    },
    {
      pipe: new IsYesterdayPipe(),
      date: () =>
        runFn(() => {
          const date = new Date();
          date.setDate(date.getDate() - 1);
          return date;
        }),
      expected: true
    }
  ].forEach(test => {
    it(`${removePipe(test.pipe.constructor.name)}? ${test.expected}`, () => {
      expect(test.pipe.transform(test.date())).toEqual(test.expected);
    });
  });

  // Two params
  [
    // IsAfterPipe
    {
      pipe: new IsAfterPipe(),
      dateLeft: new Date(2000, 0, 2),
      dateRight: new Date(2000, 0, 1),
      expected: true
    },
    {
      pipe: new IsAfterPipe(),
      dateLeft: new Date(2000, 0, 3),
      dateRight: new Date(2000, 0, 4),
      expected: false
    },

    // IsBeforePipe
    {
      pipe: new IsBeforePipe(),
      dateLeft: new Date(2000, 0, 2),
      dateRight: new Date(2000, 0, 1),
      expected: false
    },
    {
      pipe: new IsBeforePipe(),
      dateLeft: new Date(2000, 0, 3),
      dateRight: new Date(2000, 0, 4),
      expected: true
    },

    // IsEqualPipe
    {
      pipe: new IsEqualPipe(),
      dateLeft: new Date(2000, 0, 31, 1, 2, 3),
      dateRight: new Date(2000, 0, 31, 1, 2, 4),
      expected: false
    },
    {
      pipe: new IsEqualPipe(),
      dateLeft: new Date(2000, 0, 31, 1, 2, 3),
      dateRight: new Date(2000, 0, 31, 1, 2, 3),
      expected: true
    },

    // IsSameMonthPipe
    {
      pipe: new IsSameMonthPipe(),
      dateLeft: new Date(2000, 0, 31),
      dateRight: new Date(2000, 0, 1),
      expected: true
    },
    {
      pipe: new IsSameMonthPipe(),
      dateLeft: new Date(2000, 0, 31),
      dateRight: new Date(2000, 1, 1),
      expected: false
    },

    // IsSameYearPipe
    {
      pipe: new IsSameYearPipe(),
      dateLeft: new Date(2000, 0, 31),
      dateRight: new Date(2000, 0, 1),
      expected: true
    },
    {
      pipe: new IsSameYearPipe(),
      dateLeft: new Date(2000, 0, 31),
      dateRight: new Date(2001, 1, 1),
      expected: false
    },
    // IsSameDayPipe
    {
      pipe: new IsSameDayPipe(),
      dateLeft: new Date(2014, 8, 4, 6, 0),
      dateRight: new Date(2014, 8, 4, 18, 0),
      expected: true
    },
    {
      pipe: new IsSameDayPipe(),
      dateLeft: new Date(2014, 8, 4, 6, 0),
      dateRight: new Date(2014, 8, 5),
      expected: false
    },
    // IsSameHourPipe
    {
      pipe: new IsSameHourPipe(),
      dateLeft: new Date(2020, 2, 30),
      dateRight: new Date(2020, 2, 30),
      expected: true
    },
    {
      pipe: new IsSameHourPipe(),
      dateLeft: new Date(2020, 2, 30, 1),
      dateRight: new Date(2020, 2, 30),
      expected: false
    },
    // IsSameISOWeekYearPipe
    {
      pipe: new IsSameISOWeekYearPipe(),
      dateLeft: new Date(2003, 11, 29),
      dateRight: new Date(2005, 0, 2),
      expected: true
    },
    {
      pipe: new IsSameISOWeekYearPipe(),
      dateLeft: new Date(1977, 0, 1),
      dateRight: new Date(1977, 11, 31),
      expected: false
    },
    // IsSameISOWeekPipe
    {
      pipe: new IsSameISOWeekPipe(),
      dateLeft: new Date(2014, 8, 1),
      dateRight: new Date(2014, 8, 7),
      expected: true
    },
    {
      pipe: new IsSameISOWeekPipe(),
      dateLeft: new Date(1977, 0, 1),
      dateRight: new Date(1977, 0, 2),
      expected: true
    },
    {
      pipe: new IsSameISOWeekPipe(),
      dateLeft: new Date(1978, 0, 2),
      dateRight: new Date(2078, 11, 31),
      expected: false
    },
    // IsSameMinutePipe
    {
      pipe: new IsSameMinutePipe(),
      dateLeft: new Date(2020, 2, 15, 4, 33, 2),
      dateRight: new Date(2020, 2, 15, 4, 33, 55),
      expected: true
    },
    {
      pipe: new IsSameMinutePipe(),
      dateLeft: new Date(2020, 2, 15, 4, 33, 2),
      dateRight: new Date(2020, 2, 16, 3, 34, 55),
      expected: false
    },
    // IsSameQuarterPipe
    {
      pipe: new IsSameQuarterPipe(),
      dateLeft: new Date(2014, 0, 1),
      dateRight: new Date(2014, 2, 8),
      expected: true
    },
    {
      pipe: new IsSameQuarterPipe(),
      dateLeft: new Date(2014, 0, 1),
      dateRight: new Date(2014, 4, 8),
      expected: false
    },
    // IsSameSecondPipe
    {
      pipe: new IsSameSecondPipe(),
      dateLeft: new Date(2020, 2, 30, 5, 5, 5, 100),
      dateRight: new Date(2020, 2, 30, 5, 5, 5, 900),
      expected: true
    },
    {
      pipe: new IsSameSecondPipe(),
      dateLeft: new Date(2020, 2, 30, 5, 6, 5, 100),
      dateRight: new Date(2020, 2, 30, 5, 5, 5, 900),
      expected: false
    },
    // IsSameYearPipe
    {
      pipe: new IsSameYearPipe(),
      dateLeft: new Date(2020, 2, 30),
      dateRight: new Date(2020, 5, 20),
      expected: true
    },
    {
      pipe: new IsSameYearPipe(),
      dateLeft: new Date(2019, 2, 30),
      dateRight: new Date(2020, 2, 30),
      expected: false
    }
  ].forEach(test => {
    it(`${test.dateLeft} ${removePipe(test.pipe.constructor.name)} ${
      test.dateRight
    }? ${test.expected}`, () => {
      expect(test.pipe.transform(test.dateLeft, test.dateRight)).toEqual(
        test.expected
      );
    });
  });

  describe('isExists()', () => {
    [
      { date: [2018, 0, 31], expected: true },
      { date: [2018, 1, 31], expected: false }
    ].forEach(test => {
      const [y, m, d] = test.date;
      it(`${y}/${m}/${d} exists? ${test.expected}`, () => {
        expect(new IsExistsPipe().transform(y, m, d)).toEqual(test.expected);
      });
    });
  });

  describe('isWithinInterval()', () => {
    [
      {
        date: new Date(2014, 0, 3),
        interval: { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) },
        expected: true
      },
      {
        date: new Date(2014, 0, 3),
        interval: { start: new Date(2014, 0, 4), end: new Date(2014, 0, 7) },
        expected: false
      }
    ].forEach(test => {
      it(`${test.date.toDateString()} Is Within ${test.interval.start.toDateString()} and ${test.interval.end.toDateString()}? ${
        test.expected
      }`, () => {
        expect(
          new IsWithinIntervalPipe().transform(test.date, test.interval)
        ).toEqual(test.expected);
      });
    });
  });

  describe('isToday()', () => {
    beforeEach(() => {
      jasmine.clock().uninstall();
      jasmine.clock().install();
      jasmine.clock().mockDate(new Date(2014, 9, 6));
    });
    afterEach(() => {
      jasmine.clock().uninstall();
    });

    [
      {
        date: new Date(2014, 9, 6),
        expected: true
      },
      {
        date: new Date(2014, 9, 5),
        expected: false
      }
    ].forEach(test => {
      it(`${test.date} Is Today? ${test.expected}`, () => {
        expect(new IsTodayPipe().transform(test.date)).toEqual(test.expected);
      });
    });
  });
});
