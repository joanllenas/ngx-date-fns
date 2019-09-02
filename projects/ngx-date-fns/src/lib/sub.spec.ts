import { removePipe } from './test-utils';
import { SubDaysPipe } from './sub-days.pipe';
import { SubHoursPipe } from './sub-hours.pipe';
import { SubISOWeekYearsPipe } from './sub-iso-week-years.pipe';
import { SubMillisecondsPipe } from './sub-milliseconds.pipe';
import { SubMinutesPipe } from './sub-minutes.pipe';
import { SubMonthsPipe } from './sub-months.pipe';
import { SubQuartersPipe } from './sub-quarters.pipe';
import { SubSecondsPipe } from './sub-seconds.pipe';
import { SubWeeksPipe } from './sub-weeks.pipe';
import { SubYearsPipe } from './sub-years.pipe';

const whatToSubtract = (name: string) => removePipe(name).substring(3);

[
  {
    pipe: new SubDaysPipe(),
    date: new Date(2014, 8, 1),
    amount: 10,
    expected: new Date(2014, 7, 22)
  },
  {
    pipe: new SubHoursPipe(),
    date: new Date(2014, 6, 11, 1, 0),
    amount: 2,
    expected: new Date(2014, 6, 10, 23, 0)
  },
  {
    pipe: new SubISOWeekYearsPipe(),
    date: new Date(2014, 8, 1),
    amount: 5,
    expected: new Date(2009, 7, 31)
  },
  {
    pipe: new SubMillisecondsPipe(),
    date: new Date(2014, 6, 10, 12, 45, 30, 0),
    amount: 750,
    expected: new Date(2014, 6, 10, 12, 45, 29, 250)
  },
  {
    pipe: new SubMinutesPipe(),
    date: new Date(2014, 6, 10, 12, 0),
    amount: 30,
    expected: new Date(2014, 6, 10, 11, 30)
  },
  {
    pipe: new SubMonthsPipe(),
    date: new Date(2015, 1, 1),
    amount: 5,
    expected: new Date(2014, 8, 1)
  },
  {
    pipe: new SubQuartersPipe(),
    date: new Date(2014, 8, 1),
    amount: 3,
    expected: new Date(2013, 11, 1)
  },
  {
    pipe: new SubSecondsPipe(),
    date: new Date(2014, 6, 10, 12, 45, 0),
    amount: 30,
    expected: new Date(2014, 6, 10, 12, 44, 30)
  },
  {
    pipe: new SubWeeksPipe(),
    date: new Date(2014, 8, 1),
    amount: 4,
    expected: new Date(2014, 7, 4)
  },
  {
    pipe: new SubYearsPipe(),
    date: new Date(2014, 8, 1),
    amount: 5,
    expected: new Date(2009, 8, 1)
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`Subtracting ${test.amount} ${whatToSubtract(
      test.pipe.constructor.name
    )} from ${test.date.toLocaleString()} should result in ${test.expected.toLocaleString()}`, () => {
      expect(test.pipe.transform(test.date, test.amount)).toEqual(
        test.expected
      );
    });
  });
});
