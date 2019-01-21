import { LastDayOfISOWeekPipe } from './last-day-of-iso-week.pipe';

describe('LastDayOfISOWeekPipe', () => {
  let pipe: LastDayOfISOWeekPipe;

  beforeEach(() => (pipe = new LastDayOfISOWeekPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      LastDayOfISOWeekPipe.NO_ARGS_ERROR
    );
  });

  it('should return the last day of ISO week for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date)).toEqual(new Date(2014, 8, 7, 0, 0, 0, 0));
  });
});
