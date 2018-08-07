import { DifferenceInISOWeekYearsPipe } from './difference-in-iso-week-years.pipe';

describe('DifferenceInISOWeekYearsPipe', () => {
  let pipe: DifferenceInISOWeekYearsPipe;

  beforeEach(() => (pipe = new DifferenceInISOWeekYearsPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined, undefined)).toThrowError(
      Error,
      DifferenceInISOWeekYearsPipe.NO_ARGS_ERROR
    );
  });

  it('should display how many full ISO week-numbering years are between 1 January 2010 and 1 January 2012', () => {
    expect(pipe.transform(new Date(2012, 0, 1), new Date(2010, 0, 1))).toBe(1);
  });
});
