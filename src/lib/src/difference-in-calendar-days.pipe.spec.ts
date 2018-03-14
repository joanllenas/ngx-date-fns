


import { DifferenceInCalendarDaysPipe } from './difference-in-calendar-days.pipe';

describe('DifferenceInCalendarDaysPipe', () => {
  let pipe: DifferenceInCalendarDaysPipe;

  beforeEach(() => pipe = new DifferenceInCalendarDaysPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, DifferenceInCalendarDaysPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in calendar days', () => {
    expect(pipe.transform(new Date(2012, 6, 2, 0, 0), new Date(2011, 6, 2, 23, 0)))
      .toBe(366);
  });
});
