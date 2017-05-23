import 'core-js';
import 'reflect-metadata';
import { GetISOWeekPipe } from './get-iso-week.pipe';

describe('GetISOWeekPipe', () => {
  var pipe: GetISOWeekPipe;

  beforeEach(() => pipe = new GetISOWeekPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetISOWeekPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2005, 0, 2)))
      .toBe(53);
  });
});
