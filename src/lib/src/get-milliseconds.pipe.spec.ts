import { GetMillisecondsPipe } from './get-milliseconds.pipe';

describe('GetMillisecondsPipe', () => {
  let pipe: GetMillisecondsPipe;

  beforeEach(() => (pipe = new GetMillisecondsPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined)).toThrowError(
      Error,
      GetMillisecondsPipe.NO_ARGS_ERROR
    );
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29, 11, 45, 5, 123))).toBe(123);
  });
});
