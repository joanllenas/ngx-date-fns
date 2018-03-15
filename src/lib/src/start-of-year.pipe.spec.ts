


import { StartOfYearPipe } from './start-of-year.pipe';

describe('StartOfYearPipe', () => {
  let pipe: StartOfYearPipe;

  beforeEach(() => pipe = new StartOfYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, StartOfYearPipe.NO_ARGS_ERROR);
  });

  it('should return the start of year for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .toEqual(new Date(2014, 0, 1, 0, 0, 0));
  });
});
