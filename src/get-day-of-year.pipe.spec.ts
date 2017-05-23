import 'core-js';
import 'reflect-metadata';
import { GetDayOfYearPipe } from './get-day-of-year.pipe';

describe('GetDayOfYearPipe', () => {
  var pipe: GetDayOfYearPipe;

  beforeEach(() => pipe = new GetDayOfYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetDayOfYearPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2)))
      .toBe(183);
  });
});
