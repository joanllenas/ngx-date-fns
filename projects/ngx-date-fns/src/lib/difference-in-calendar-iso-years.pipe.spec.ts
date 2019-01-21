import { DifferenceInCalendarISOYearsPipe } from './difference-in-calendar-iso-years.pipe';

describe('DifferenceInCalendarISOYearsPipe', () => {
  let pipe: DifferenceInCalendarISOYearsPipe;

  beforeEach(() => (pipe = new DifferenceInCalendarISOYearsPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined, undefined)).toThrowError(
      Error,
      DifferenceInCalendarISOYearsPipe.NO_ARGS_ERROR
    );
  });

  it('should display how many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012', () => {
    expect(pipe.transform(new Date(2012, 0, 1), new Date(2010, 0, 1))).toBe(2);
  });
});
