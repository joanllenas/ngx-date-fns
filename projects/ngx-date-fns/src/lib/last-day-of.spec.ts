import { LastDayOfISOWeekYearPipe } from './last-day-of-iso-week-year.pipe';
import { removePipe } from './test-utils';
import { LastDayOfDecadePipe } from './last-day-of-decade.pipe';
import { LastDayOfISOWeekPipe } from './last-day-of-iso-week.pipe';
import { LastDayOfMonthPipe } from './last-day-of-month.pipe';
import { LastDayOfQuarterPipe } from './last-day-of-quarter.pipe';
import { LastDayOfYearPipe } from './last-day-of-year.pipe';

[
  {
    pipe: new LastDayOfDecadePipe(),
    date: new Date(2012, 11, 21, 21, 12, 0),
    expected: new Date(2019, 11, 31)
  },
  {
    pipe: new LastDayOfISOWeekPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 7, 0, 0, 0, 0)
  },
  {
    pipe: new LastDayOfISOWeekYearPipe(),
    date: new Date(2005, 6, 2),
    expected: new Date(2006, 0, 1)
  },
  {
    pipe: new LastDayOfMonthPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 30, 0, 0, 0, 0)
  },
  {
    pipe: new LastDayOfQuarterPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 8, 30, 0, 0, 0, 0)
  },
  {
    pipe: new LastDayOfYearPipe(),
    date: new Date(2014, 8, 2, 11, 55, 0),
    expected: new Date(2014, 11, 31, 0, 0, 0, 0)
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`Date '${test.expected.toLocaleString()}' should be ${removePipe(
      test.pipe.constructor.name
    )} of ${test.date}`, () => {
      expect(test.pipe.transform(test.date)).toEqual(test.expected);
    });
  });
});
