import 'core-js';
import 'reflect-metadata';
import { GetDaysInMonthPipe } from './get-days-in-month.pipe';

describe('GetDaysInMonthPipe', () => {
  var pipe: GetDaysInMonthPipe;

  beforeEach(() => pipe = new GetDaysInMonthPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetDaysInMonthPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2000, 1)))
      .toBe(29);
  });
});
