import { GetISODayPipe } from './get-iso-day.pipe';

describe('GetISODayPipe', () => {
  let pipe: GetISODayPipe;

  beforeEach(() => (pipe = new GetISODayPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      GetISODayPipe.NO_ARGS_ERROR
    );
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29))).toBe(3);
  });
});
