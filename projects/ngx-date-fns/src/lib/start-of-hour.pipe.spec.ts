import { StartOfHourPipe } from './start-of-hour.pipe';

describe('StartOfHourPipe', () => {
  let pipe: StartOfHourPipe;

  beforeEach(() => (pipe = new StartOfHourPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      StartOfHourPipe.NO_ARGS_ERROR
    );
  });

  it('should return start of hour for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55);
    expect(pipe.transform(date)).toEqual(new Date(2014, 8, 2, 11, 0));
  });
});
