import { DifferenceInCalendarISOWeekYearsPipe } from './difference-in-calendar-iso-week-years.pipe';

describe('DifferenceInCalendarISOWeekYearsPipe', () => {
  let pipe: DifferenceInCalendarISOWeekYearsPipe;

  beforeEach(() => (pipe = new DifferenceInCalendarISOWeekYearsPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined, undefined)).toThrowError(
      Error,
      DifferenceInCalendarISOWeekYearsPipe.NO_ARGS_ERROR
    );
  });

  it('should display how many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012', () => {
    expect(pipe.transform(new Date(2012, 0, 1), new Date(2010, 0, 1))).toBe(2);
  });
});
