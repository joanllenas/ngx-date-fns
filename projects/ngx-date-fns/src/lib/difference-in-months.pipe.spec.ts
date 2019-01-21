import { DifferenceInMonthsPipe } from './difference-in-months.pipe';

describe('DifferenceInMonthsPipe', () => {
  let pipe: DifferenceInMonthsPipe;

  beforeEach(() => (pipe = new DifferenceInMonthsPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined, undefined)).toThrowError(
      Error,
      DifferenceInMonthsPipe.NO_ARGS_ERROR
    );
  });

  it('should display the difference in months', () => {
    expect(pipe.transform(new Date(2014, 8, 1), new Date(2014, 0, 31))).toBe(7);
  });
});
