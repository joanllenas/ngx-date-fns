import { EndOfYearPipe } from './end-of-year.pipe';

describe('EndOfYearPipe', () => {
  let pipe: EndOfYearPipe;

  beforeEach(() => (pipe = new EndOfYearPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined)).toThrowError(
      Error,
      EndOfYearPipe.NO_ARGS_ERROR
    );
  });

  it('should return the end of year for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date)).toEqual(
      new Date(2014, 11, 31, 23, 59, 59, 999)
    );
  });
});
