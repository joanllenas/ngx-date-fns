import { GetHoursPipe } from './get-hours.pipe';

describe('GetHoursPipe', () => {
  let pipe: GetHoursPipe;

  beforeEach(() => (pipe = new GetHoursPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined)).toThrowError(
      Error,
      GetHoursPipe.NO_ARGS_ERROR
    );
  });

  it('should get the hours of 29 February 2012 11:45:00', () => {
    expect(pipe.transform(new Date(2012, 1, 29, 11, 45))).toBe(11);
  });
});
