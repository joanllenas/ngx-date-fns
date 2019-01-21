import { EndOfDayPipe } from './end-of-day.pipe';

describe('EndOfDayPipe', () => {
  let pipe: EndOfDayPipe;

  beforeEach(() => (pipe = new EndOfDayPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      EndOfDayPipe.NO_ARGS_ERROR
    );
  });

  it('should return the end of an hour for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55);
    expect(pipe.transform(date)).toEqual(new Date(2014, 8, 2, 23, 59, 59, 999));
  });
});
