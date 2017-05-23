import 'core-js';
import 'reflect-metadata';
import { GetMonthPipe } from './get-month.pipe';

describe('GetMonthPipe', () => {
  var pipe: GetMonthPipe;

  beforeEach(() => pipe = new GetMonthPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetMonthPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29)))
      .toBe(1);
  });
});
