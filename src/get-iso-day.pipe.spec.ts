import 'core-js';
import 'reflect-metadata';
import { GetISODayPipe } from './get-iso-day.pipe';

describe('GetISODayPipe', () => {
  var pipe: GetISODayPipe;

  beforeEach(() => pipe = new GetISODayPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetISODayPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29)))
      .toBe(3);
  });
});
