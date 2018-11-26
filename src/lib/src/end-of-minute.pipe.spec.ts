


import { EndOfMinutePipe } from './end-of-minute.pipe';

describe('EndOfMinutePipe', () => {
  let pipe: EndOfMinutePipe;

  beforeEach(() => pipe = new EndOfMinutePipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined))
        .toThrowError(Error, EndOfMinutePipe.NO_ARGS_ERROR);
  });

  it('should return the end of minute for 1 December 2014 22:15:45.400', () => {
    const date = new Date(2014, 11, 1, 22, 15, 45, 400);
    expect(pipe.transform(date))
      .toEqual(new Date(2014, 11, 1, 22, 15, 59, 999));
  });
});
