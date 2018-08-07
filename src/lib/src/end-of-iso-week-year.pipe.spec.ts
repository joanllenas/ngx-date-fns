import { EndOfISOWeekYearPipe } from './end-of-iso-week-year.pipe';

describe('EndOfISOWeekYearPipe', () => {
  let pipe: EndOfISOWeekYearPipe;

  beforeEach(() => (pipe = new EndOfISOWeekYearPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined)).toThrowError(
      Error,
      EndOfISOWeekYearPipe.NO_ARGS_ERROR
    );
  });

  it('should return the end of the ISO week-numbering year for 2 July 2005', () => {
    const date = new Date(2005, 6, 2);
    expect(pipe.transform(date)).toEqual(new Date(2006, 0, 1, 23, 59, 59, 999));
  });
});
