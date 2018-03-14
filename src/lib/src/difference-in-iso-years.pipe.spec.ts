


import { DifferenceInISOYearsPipe } from './difference-in-iso-years.pipe';

describe('DifferenceInISOYearsPipe', () => {
  let pipe: DifferenceInISOYearsPipe;

  beforeEach(() => pipe = new DifferenceInISOYearsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, DifferenceInISOYearsPipe.NO_ARGS_ERROR);
  });

  it('should display how many full ISO week-numbering years are between 1 January 2010 and 1 January 2012', () => {
    expect(pipe.transform(new Date(2012, 0, 1), new Date(2010, 0, 1)))
      .toBe(1);
  });
});
