import 'core-js';
import 'reflect-metadata';
import { GetTimePipe } from './get-time.pipe';

describe('GetTimePipe', () => {
  var pipe: GetTimePipe;

  beforeEach(() => pipe = new GetTimePipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetTimePipe.NO_ARGS_ERROR));
  });

  it('should return the milliseconds timestamp of the given date', () => {
    expect(pipe.transform(new Date(2012, 1, 29, 11, 45, 5, 123)))
      .toEqual(1330512305123);
  });
});
