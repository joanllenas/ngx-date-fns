


import { GetDaysInYearPipe } from './get-days-in-year.pipe';

describe('GetDaysInYearPipe', () => {
  let pipe: GetDaysInYearPipe;

  beforeEach(() => pipe = new GetDaysInYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined))
        .toThrowError(Error, GetDaysInYearPipe.NO_ARGS_ERROR);
  });

  it('should display how many days are in 2012', () => {
    expect(pipe.transform(new Date(2012, 0, 1)))
      .toBe(366);
  });
});
