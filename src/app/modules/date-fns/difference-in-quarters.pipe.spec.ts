


import { DifferenceInQuartersPipe } from './difference-in-quarters.pipe';

describe('DifferenceInQuartersPipe', () => {
  let pipe: DifferenceInQuartersPipe;

  beforeEach(() => pipe = new DifferenceInQuartersPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, DifferenceInQuartersPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in quarters', () => {
    expect(pipe.transform(new Date(2014, 6, 2), new Date(2013, 11, 31)))
      .toBe(2);
  });
});
