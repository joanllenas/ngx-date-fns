import 'es6-shim';
import 'reflect-metadata';
import { GetYearPipe } from './get-year.pipe';

describe('GetYearPipe', () => {
  var pipe: GetYearPipe;

  beforeEach(() => pipe = new GetYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetYearPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2)))
      .toBe(2014);
  });
});
