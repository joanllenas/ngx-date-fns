import 'es6-shim';
import 'reflect-metadata';
import { GetSecondsPipe } from './get-seconds.pipe';

describe('GetSecondsPipe', () => {
  var pipe: GetSecondsPipe;

  beforeEach(() => pipe = new GetSecondsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetSecondsPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29, 11, 45, 5, 123)))
      .toBe(5);
  });
});
