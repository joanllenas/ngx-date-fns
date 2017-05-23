import 'core-js';
import 'reflect-metadata';
import { GetISOWeeksInYearPipe } from './get-iso-weeks-in-year.pipe';

describe('GetISOWeeksInYearPipe', () => {
  var pipe: GetISOWeeksInYearPipe;

  beforeEach(() => pipe = new GetISOWeeksInYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetISOWeeksInYearPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2015, 1, 11)))
      .toBe(53);
  });
});
