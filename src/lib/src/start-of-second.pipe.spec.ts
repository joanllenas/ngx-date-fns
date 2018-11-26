


import { StartOfSecondPipe } from './start-of-second.pipe';

describe('StartOfSecondPipe', () => {
  let pipe: StartOfSecondPipe;

  beforeEach(() => pipe = new StartOfSecondPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined))
        .toThrowError(Error, StartOfSecondPipe.NO_ARGS_ERROR);
  });

  it('should return the start of second for 1 December 2014 22:15:45.400', () => {
    const date = new Date(2014, 11, 1, 22, 15, 45, 400);
    expect(pipe.transform(date))
      .toEqual(new Date(2014, 11, 1, 22, 15, 45, 0));
  });
});
