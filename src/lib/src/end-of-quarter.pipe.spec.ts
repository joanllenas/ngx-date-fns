


import { EndOfQuarterPipe } from './end-of-quarter.pipe';

describe('EndOfQuarterPipe', () => {
  let pipe: EndOfQuarterPipe;

  beforeEach(() => pipe = new EndOfQuarterPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined))
        .toThrowError(Error, EndOfQuarterPipe.NO_ARGS_ERROR);
  });

  it('should return the end of quarter for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .toEqual(new Date(2014, 8, 30, 23, 59, 59, 999));
  });
});
