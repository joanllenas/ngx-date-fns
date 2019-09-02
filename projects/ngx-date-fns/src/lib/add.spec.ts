import { AddDaysPipe } from './add-days.pipe';
import { AddHoursPipe } from './add-hours.pipe';
import { AddISOWeekYearsPipe } from './add-iso-week-years.pipe';
import { AddMillisecondsPipe } from './add-milliseconds.pipe';
import { AddMinutesPipe } from './add-minutes.pipe';
import { AddMonthsPipe } from './add-months.pipe';
import { AddQuartersPipe } from './add-quarters.pipe';
import { AddSecondsPipe } from './add-seconds.pipe';
import { AddWeeksPipe } from './add-weeks.pipe';
import { AddYearsPipe } from './add-years.pipe';
import { AddBusinessDaysPipe } from './add-business-days.pipe';
import { removePipe } from './test-utils';

const extractWhatToAdd = (name: string) => removePipe(name).substring(4);

[
  {
    pipe: new AddDaysPipe(),
    date: new Date(2014, 8, 1),
    amount: 10,
    expected: new Date(2014, 8, 11)
  },
  {
    pipe: new AddHoursPipe(),
    date: new Date(2014, 6, 10, 23),
    amount: 2,
    expected: new Date(2014, 6, 11, 1)
  },
  {
    pipe: new AddBusinessDaysPipe(),
    date: new Date(2014, 8, 1),
    amount: 10,
    expected: new Date(2014, 8, 15)
  },
  {
    pipe: new AddISOWeekYearsPipe(),
    date: new Date(2010, 6, 2),
    amount: 5,
    expected: new Date(2015, 5, 26)
  },
  {
    pipe: new AddMillisecondsPipe(),
    date: new Date(2014, 6, 10, 12, 45, 30, 0),
    amount: 750,
    expected: new Date(2014, 6, 10, 12, 45, 30, 750)
  },
  {
    pipe: new AddMinutesPipe(),
    date: new Date(2014, 6, 10, 12, 0),
    amount: 30,
    expected: new Date(2014, 6, 10, 12, 30)
  },
  {
    pipe: new AddMonthsPipe(),
    date: new Date(2014, 8, 1),
    amount: 5,
    expected: new Date(2015, 1, 1)
  },
  {
    pipe: new AddQuartersPipe(),
    date: new Date(2014, 8, 1),
    amount: 1,
    expected: new Date(2014, 11, 1)
  },
  {
    pipe: new AddSecondsPipe(),
    date: new Date(2014, 6, 10, 12, 45, 0),
    amount: 30,
    expected: new Date(2014, 6, 10, 12, 45, 30)
  },
  {
    pipe: new AddWeeksPipe(),
    date: new Date(2014, 8, 1),
    amount: 4,
    expected: new Date(2014, 8, 29)
  },
  {
    pipe: new AddYearsPipe(),
    date: new Date(2014, 8, 1),
    amount: 5,
    expected: new Date(2019, 8, 1)
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`should add ${test.amount} ${extractWhatToAdd(
      test.pipe.constructor.name
    )} to ${test.date.toLocaleDateString()}`, () => {
      expect(test.pipe.transform(test.date, test.amount)).toEqual(
        test.expected
      );
    });
  });
});
