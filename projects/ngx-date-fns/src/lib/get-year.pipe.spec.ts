import { GetYearPipe } from './get-year.pipe';

describe('GetYearPipe', () => {
  let pipe: GetYearPipe;

  beforeEach(() => (pipe = new GetYearPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      GetYearPipe.NO_ARGS_ERROR
    );
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2))).toBe(2014);
  });
});
