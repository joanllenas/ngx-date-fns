import 'core-js';
import 'reflect-metadata';
import { MinPipe } from './min.pipe';

describe('MinPipe', () => {
  var pipe: MinPipe;

  beforeEach(() => pipe = new MinPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(MinPipe.NO_ARGS_ERROR));
  });

  it('should throw when less than two dates are provided', () => {
      expect(() => pipe.transform([]))
        .toThrow(new Error(MinPipe.NO_ARGS_ERROR));
      expect(() => pipe.transform([new Date()]))
        .toThrow(new Error(MinPipe.NO_ARGS_ERROR));
  });

  it('should return the min date of two dates', () => {
    expect(pipe.transform([new Date(2012, 1, 29), new Date(2011, 1, 29)]))
      .toEqual(new Date(2011, 1, 29));
  });

  it('should return the min date of many dates', () => {
    const dates = [new Date(2010, 5, 9), new Date(2012, 1, 29), new Date(2009, 1, 9), new Date(2016, 2, 20)];
    expect(pipe.transform(dates))
      .toEqual(new Date(2009, 1, 9));
  });
});
