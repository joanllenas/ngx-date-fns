


import { LastDayOfISOYearPipe } from './last-day-of-iso-year.pipe';

describe('LastDayOfISOYearPipe', () => {
  let pipe: LastDayOfISOYearPipe;

  beforeEach(() => pipe = new LastDayOfISOYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, LastDayOfISOYearPipe.NO_ARGS_ERROR);
  });

  it('should return the last day of ISO week-numbering year for 2 July 2005', () => {
    const date = new Date(2005, 6, 2);
    expect(pipe.transform(date))
      .toEqual(new Date(2006, 0, 1, 0, 0 , 0, 0));
  });
});
