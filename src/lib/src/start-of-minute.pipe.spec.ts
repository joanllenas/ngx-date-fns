


import { StartOfMinutePipe } from './start-of-minute.pipe';

describe('StartOfMinutePipe', () => {
  let pipe: StartOfMinutePipe;

  beforeEach(() => pipe = new StartOfMinutePipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, StartOfMinutePipe.NO_ARGS_ERROR);
  });

  it('should return the start of minute for 1 December 2014 22:15:45.400', () => {
    const date = new Date(2014, 11, 1, 22, 15, 45, 400);
    expect(pipe.transform(date))
      .toEqual(new Date(2014, 11, 1, 22, 15, 0, 0));
  });
});
