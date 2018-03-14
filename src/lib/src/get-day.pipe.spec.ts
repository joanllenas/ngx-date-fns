


import { GetDayPipe } from './get-day.pipe';

describe('GetDayPipe', () => {
  let pipe: GetDayPipe;

  beforeEach(() => pipe = new GetDayPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, GetDayPipe.NO_ARGS_ERROR);
  });

  it('should display which day of the week is 29 February 2012', () => {
    expect(pipe.transform(new Date(2012, 1, 29)))
      .toBe(3);
  });
});
