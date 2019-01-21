import { GetQuarterPipe } from './get-quarter.pipe';

describe('GetQuarterPipe', () => {
  let pipe: GetQuarterPipe;

  beforeEach(() => (pipe = new GetQuarterPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      GetQuarterPipe.NO_ARGS_ERROR
    );
  });

  it('should display which quarter is 2 July 2014', () => {
    expect(pipe.transform(new Date(2014, 6, 2))).toBe(3);
  });
});
