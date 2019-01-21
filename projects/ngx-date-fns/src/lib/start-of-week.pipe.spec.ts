import { StartOfWeekPipe } from './start-of-week.pipe';

describe('StartOfWeekPipe', () => {
  let pipe: StartOfWeekPipe;

  beforeEach(() => (pipe = new StartOfWeekPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      StartOfWeekPipe.NO_ARGS_ERROR
    );
  });

  it('should return the start of a week for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date)).toEqual(new Date(2014, 7, 31, 0, 0, 0, 0));
  });

  it('should return the start of week for 2 September 2014 11:55:00 if the week starts on Monday', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date, { weekStartsOn: 1 })).toEqual(
      new Date(2014, 8, 1, 0, 0, 0, 0)
    );
  });
});
