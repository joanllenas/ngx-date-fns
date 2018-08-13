import { StartOfISOWeekYearPipe } from './start-of-iso-week-year.pipe';

describe('StartOfISOWeekYearPipe', () => {
  let pipe: StartOfISOWeekYearPipe;

  beforeEach(() => (pipe = new StartOfISOWeekYearPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined)).toThrowError(
      Error,
      StartOfISOWeekYearPipe.NO_ARGS_ERROR
    );
  });

  it('should return the start of ISO week-numbering year for 2 July 2005', () => {
    const date = new Date(2005, 6, 2);
    expect(pipe.transform(date)).toEqual(new Date(2005, 0, 3, 0, 0, 0));
  });
});
