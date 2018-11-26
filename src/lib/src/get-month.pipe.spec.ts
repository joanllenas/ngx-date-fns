


import { GetMonthPipe } from './get-month.pipe';

describe('GetMonthPipe', () => {
  let pipe: GetMonthPipe;

  beforeEach(() => pipe = new GetMonthPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined))
        .toThrowError(Error, GetMonthPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29)))
      .toBe(1);
  });
});
