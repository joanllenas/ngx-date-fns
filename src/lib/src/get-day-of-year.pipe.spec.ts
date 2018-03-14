


import { GetDayOfYearPipe } from './get-day-of-year.pipe';

describe('GetDayOfYearPipe', () => {
  let pipe: GetDayOfYearPipe;

  beforeEach(() => pipe = new GetDayOfYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, GetDayOfYearPipe.NO_ARGS_ERROR);
  });

  it('should display which day of the year is 2 July 2014', () => {
    expect(pipe.transform(new Date(2014, 6, 2)))
      .toBe(183);
  });
});
