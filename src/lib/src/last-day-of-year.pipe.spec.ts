


import { LastDayOfYearPipe } from './last-day-of-year.pipe';

describe('LastDayOfYearPipe', () => {
  let pipe: LastDayOfYearPipe;

  beforeEach(() => pipe = new LastDayOfYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, LastDayOfYearPipe.NO_ARGS_ERROR);
  });

  it('should return the last day of year for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .toEqual(new Date(2014, 11, 31, 0, 0 , 0, 0));
  });
});
