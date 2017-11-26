


import { StartOfQuarterPipe } from './start-of-quarter.pipe';

describe('StartOfQuarterPipe', () => {
  let pipe: StartOfQuarterPipe;

  beforeEach(() => pipe = new StartOfQuarterPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, StartOfQuarterPipe.NO_ARGS_ERROR);
  });

  it('should return the start of quarter for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .toEqual(new Date(2014, 6, 1, 0, 0, 0));
  });
});
