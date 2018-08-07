import { EndOfMonthPipe } from './end-of-month.pipe';

describe('EndOfMonthPipe', () => {
  let pipe: EndOfMonthPipe;

  beforeEach(() => (pipe = new EndOfMonthPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined)).toThrowError(
      Error,
      EndOfMonthPipe.NO_ARGS_ERROR
    );
  });

  it('should return the end of month for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date)).toEqual(
      new Date(2014, 8, 30, 23, 59, 59, 999)
    );
  });
});
