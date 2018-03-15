


import { GetDatePipe } from './get-date.pipe';

describe('GetDatePipe', () => {
  let pipe: GetDatePipe;

  beforeEach(() => pipe = new GetDatePipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrowError(Error, GetDatePipe.NO_ARGS_ERROR);
  });

  it('should display which day of the month is 29 February 2012', () => {
    expect(pipe.transform(new Date(2012, 1, 29)))
      .toBe(29);
  });
});
