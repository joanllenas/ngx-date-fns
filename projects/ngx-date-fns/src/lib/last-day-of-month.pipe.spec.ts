import { LastDayOfMonthPipe } from './last-day-of-month.pipe';

describe('LastDayOfMonthPipe', () => {
  let pipe: LastDayOfMonthPipe;

  beforeEach(() => (pipe = new LastDayOfMonthPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      LastDayOfMonthPipe.NO_ARGS_ERROR
    );
  });

  it('should return the last day of month for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date)).toEqual(new Date(2014, 8, 30, 0, 0, 0, 0));
  });
});
