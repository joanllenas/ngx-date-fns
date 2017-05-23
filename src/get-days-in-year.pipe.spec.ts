import 'core-js';
import 'reflect-metadata';
import { GetDaysInYearPipe } from './get-days-in-year.pipe';

describe('GetDaysInYearPipe', () => {
  var pipe: GetDaysInYearPipe;

  beforeEach(() => pipe = new GetDaysInYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetDaysInYearPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 0, 1)))
      .toBe(366);
  });
});
