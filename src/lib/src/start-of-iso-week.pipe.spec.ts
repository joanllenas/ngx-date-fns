


import { StartOfISOWeekPipe } from './start-of-iso-week.pipe';

describe('StartOfISOWeekPipe', () => {
  let pipe: StartOfISOWeekPipe;

  beforeEach(() => pipe = new StartOfISOWeekPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, StartOfISOWeekPipe.NO_ARGS_ERROR);
  });

  it('should return the start of ISO week for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .toEqual(new Date(2014, 8, 1, 0, 0, 0));
  });
});
