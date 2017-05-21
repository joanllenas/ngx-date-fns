import 'es6-shim';
import 'reflect-metadata';
import { GetDatePipe } from './get-date.pipe';

describe('GetDatePipe', () => {
  var pipe: GetDatePipe;

  beforeEach(() => pipe = new GetDatePipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetDatePipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29)))
      .toBe(29);
  });
});
