import 'core-js';
import 'reflect-metadata';
import { DifferenceInCalendarMonthsPipe } from './difference-in-calendar-months.pipe';

describe('DifferenceInCalendarMonthsPipe', () => {
  var pipe: DifferenceInCalendarMonthsPipe;

  beforeEach(() => pipe = new DifferenceInCalendarMonthsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrow(new Error(DifferenceInCalendarMonthsPipe.NO_ARGS_ERROR));
  });

  it('should display the difference in calendar months', () => {
    expect(pipe.transform(new Date(2014, 8, 1), new Date(2014, 0, 31)))
      .toBe(8);
  });
});
