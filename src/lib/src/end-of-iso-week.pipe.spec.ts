


import { EndOfISOWeekPipe } from './end-of-iso-week.pipe';

describe('EndOfISOWeekPipe', () => {
  let pipe: EndOfISOWeekPipe;

  beforeEach(() => pipe = new EndOfISOWeekPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, EndOfISOWeekPipe.NO_ARGS_ERROR);
  });

  it('should return the end of the ISO week for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .toEqual(new Date(2014, 8, 7, 23, 59, 59, 999));
  });
});
