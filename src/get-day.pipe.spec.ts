import 'es6-shim';
import 'reflect-metadata';
import { GetDayPipe } from './get-day.pipe';

describe('GetDayPipe', () => {
  var pipe: GetDayPipe;

  beforeEach(() => pipe = new GetDayPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetDayPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29)))
      .toBe(3);
  });
});
