import { EndOfHourPipe } from './end-of-hour.pipe';

describe('EndOfHourPipe', () => {
  let pipe: EndOfHourPipe;

  beforeEach(() => (pipe = new EndOfHourPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      EndOfHourPipe.NO_ARGS_ERROR
    );
  });

  it('should return the end of the hour for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55);
    expect(pipe.transform(date)).toEqual(new Date(2014, 8, 2, 11, 59, 59, 999));
  });
});
