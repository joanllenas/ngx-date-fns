import { GetISOYearPipe } from './get-iso-year.pipe';

describe('GetISOYearPipe', () => {
  let pipe: GetISOYearPipe;

  beforeEach(() => (pipe = new GetISOYearPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      GetISOYearPipe.NO_ARGS_ERROR
    );
  });

  it('should display which ISO-week numbering year is 2 January 2005', () => {
    expect(pipe.transform(new Date(2005, 0, 2))).toBe(2004);
  });
});
