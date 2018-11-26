


import { DifferenceInCalendarISOWeeksPipe } from './difference-in-calendar-iso-weeks.pipe';

describe('DifferenceInCalendarISOWeeksPipe', () => {
  let pipe: DifferenceInCalendarISOWeeksPipe;

  beforeEach(() => pipe = new DifferenceInCalendarISOWeeksPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined, undefined))
        .toThrowError(Error, DifferenceInCalendarISOWeeksPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in calendar ISO weeks', () => {
    expect(pipe.transform(new Date(2014, 6, 21), new Date(2014, 6, 6)))
      .toBe(3);
  });
});
