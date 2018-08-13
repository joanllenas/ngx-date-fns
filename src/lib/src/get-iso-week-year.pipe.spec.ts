import { GetISOWeekYearPipe } from './get-iso-week-year.pipe';

describe('GetISOWeekYearPipe', () => {
  let pipe: GetISOWeekYearPipe;

  beforeEach(() => (pipe = new GetISOWeekYearPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined)).toThrowError(
      Error,
      GetISOWeekYearPipe.NO_ARGS_ERROR
    );
  });

  it('should display which ISO-week numbering year is 2 January 2005', () => {
    expect(pipe.transform(new Date(2005, 0, 2))).toBe(2004);
  });
});
