import { GetISOWeekPipe } from './get-iso-week.pipe';

describe('GetISOWeekPipe', () => {
  let pipe: GetISOWeekPipe;

  beforeEach(() => (pipe = new GetISOWeekPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined)).toThrowError(
      Error,
      GetISOWeekPipe.NO_ARGS_ERROR
    );
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2005, 0, 2))).toBe(53);
  });
});
