


import { GetDaysInMonthPipe } from './get-days-in-month.pipe';

describe('GetDaysInMonthPipe', () => {
  let pipe: GetDaysInMonthPipe;

  beforeEach(() => pipe = new GetDaysInMonthPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined))
        .toThrowError(Error, GetDaysInMonthPipe.NO_ARGS_ERROR);
  });

  it('should display how many days are in February 2000', () => {
    expect(pipe.transform(new Date(2000, 1)))
      .toBe(29);
  });
});
