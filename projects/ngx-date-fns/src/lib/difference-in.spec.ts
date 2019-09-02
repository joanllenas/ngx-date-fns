import { DifferenceInCalendarDaysPipe } from './difference-in-calendar-days.pipe';
import { DifferenceInCalendarISOWeeksPipe } from './difference-in-calendar-iso-weeks.pipe';
import { DifferenceInCalendarISOWeekYearsPipe } from './difference-in-calendar-iso-week-years.pipe';
import { DifferenceInCalendarMonthsPipe } from './difference-in-calendar-months.pipe';
import { DifferenceInCalendarQuartersPipe } from './difference-in-calendar-quarters.pipe';
import { DifferenceInCalendarWeeksPipe } from './difference-in-calendar-weeks.pipe';
import { DateFnsWeekIndex } from './types';
import { DifferenceInCalendarYearsPipe } from './difference-in-calendar-years.pipe';
import { DifferenceInDaysPipe } from './difference-in-days.pipe';
import { DifferenceInHoursPipe } from './difference-in-hours.pipe';
import { DifferenceInISOWeekYearsPipe } from './difference-in-iso-week-years.pipe';
import { DifferenceInMillisecondsPipe } from './difference-in-milliseconds.pipe';
import { DifferenceInMinutesPipe } from './difference-in-minutes.pipe';
import { DifferenceInMonthsPipe } from './difference-in-months.pipe';
import { DifferenceInQuartersPipe } from './difference-in-quarters.pipe';
import { DifferenceInSecondsPipe } from './difference-in-seconds.pipe';
import { DifferenceInWeeksPipe } from './difference-in-weeks.pipe';
import { DifferenceInYearsPipe } from './difference-in-years.pipe';
import { DifferenceInBusinessDaysPipe } from './difference-in-business-days.pipe';
import { removePipe } from './test-utils';

[
  {
    pipe: new DifferenceInCalendarDaysPipe(),
    dates: [new Date(2012, 6, 2, 0, 0), new Date(2011, 6, 2, 23, 0)],
    expected: 366
  },
  {
    pipe: new DifferenceInCalendarISOWeeksPipe(),
    dates: [new Date(2014, 6, 21), new Date(2014, 6, 6)],
    expected: 3
  },
  {
    pipe: new DifferenceInCalendarISOWeekYearsPipe(),
    dates: [new Date(2012, 0, 1), new Date(2010, 0, 1)],
    expected: 2
  },
  {
    pipe: new DifferenceInCalendarMonthsPipe(),
    dates: [new Date(2014, 8, 1), new Date(2014, 0, 31)],
    expected: 8
  },
  {
    pipe: new DifferenceInCalendarQuartersPipe(),
    dates: [new Date(2014, 6, 2), new Date(2013, 11, 31)],
    expected: 3
  },
  {
    pipe: new DifferenceInCalendarWeeksPipe(),
    dates: [new Date(2014, 6, 20), new Date(2014, 6, 5)],
    expected: 3
  },
  {
    pipe: new DifferenceInCalendarWeeksPipe(),
    dates: [new Date(2014, 6, 20), new Date(2014, 6, 5)],
    options: { weekStartsOn: 1 as DateFnsWeekIndex },
    expected: 2
  },
  {
    pipe: new DifferenceInCalendarYearsPipe(),
    dates: [new Date(2015, 1, 11), new Date(2013, 11, 31)],
    expected: 2
  },
  {
    pipe: new DifferenceInDaysPipe(),
    dates: [new Date(2012, 6, 2, 0, 0), new Date(2011, 6, 2, 23, 0)],
    expected: 365
  },
  {
    pipe: new DifferenceInHoursPipe(),
    dates: [new Date(2014, 6, 2, 19, 0), new Date(2014, 6, 2, 6, 50)],
    expected: 12
  },
  {
    pipe: new DifferenceInISOWeekYearsPipe(),
    dates: [new Date(2012, 0, 1), new Date(2010, 0, 1)],
    expected: 1
  },
  {
    pipe: new DifferenceInMillisecondsPipe(),
    dates: [
      new Date(2014, 6, 2, 12, 30, 21, 700),
      new Date(2014, 6, 2, 12, 30, 20, 600)
    ],
    expected: 1100
  },
  {
    pipe: new DifferenceInMinutesPipe(),
    dates: [new Date(2014, 6, 2, 12, 20, 0), new Date(2014, 6, 2, 12, 7, 59)],
    expected: 12
  },
  {
    pipe: new DifferenceInMonthsPipe(),
    dates: [new Date(2014, 8, 1), new Date(2014, 0, 31)],
    expected: 7
  },
  {
    pipe: new DifferenceInQuartersPipe(),
    dates: [new Date(2014, 6, 2), new Date(2013, 11, 31)],
    expected: 2
  },
  {
    pipe: new DifferenceInSecondsPipe(),
    dates: [
      new Date(2014, 6, 2, 12, 30, 20, 0),
      new Date(2014, 6, 2, 12, 30, 7, 999)
    ],
    expected: 12
  },
  {
    pipe: new DifferenceInWeeksPipe(),
    dates: [new Date(2014, 6, 20), new Date(2014, 6, 5)],
    expected: 2
  },
  {
    pipe: new DifferenceInYearsPipe(),
    dates: [new Date(2015, 1, 11), new Date(2013, 11, 31)],
    expected: 1
  },
  {
    pipe: new DifferenceInBusinessDaysPipe(),
    dates: [new Date(2014, 6, 20), new Date(2014, 0, 10)],
    expected: 136
  }
].forEach(test => {
  describe(test.pipe.constructor.name, () => {
    it(`there should be a ${removePipe(test.pipe.constructor.name)} of ${
      test.expected
    } between ${test.dates[0].toLocaleString()} and ${test.dates[1].toLocaleString()}`, () => {
      if (test.options) {
        expect(
          test.pipe.transform(test.dates[0], test.dates[1], test.options)
        ).toEqual(test.expected);
      } else {
        expect(test.pipe.transform(test.dates[0], test.dates[1])).toEqual(
          test.expected
        );
      }
    });
  });
});
