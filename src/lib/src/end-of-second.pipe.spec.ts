


import { EndOfSecondPipe } from './end-of-second.pipe';

describe('EndOfSecondPipe', () => {
  let pipe: EndOfSecondPipe;

  beforeEach(() => pipe = new EndOfSecondPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, EndOfSecondPipe.NO_ARGS_ERROR);
  });

  it('should return the end of second for 1 December 2014 22:15:45.400', () => {
    const date = new Date(2014, 11, 1, 22, 15, 45, 400);
    expect(pipe.transform(date))
      .toEqual(new Date(2014, 11, 1, 22, 15, 45, 999));
  });
});
