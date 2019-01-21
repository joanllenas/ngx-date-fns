import { GetTimePipe } from './get-time.pipe';

describe('GetTimePipe', () => {
  let pipe: GetTimePipe;

  beforeEach(() => (pipe = new GetTimePipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      GetTimePipe.NO_ARGS_ERROR
    );
  });

  it('should return the milliseconds timestamp of the given date', () => {
    const timestamp = 1483228800000;
    expect(pipe.transform(new Date(timestamp))).toEqual(timestamp);
  });
});
