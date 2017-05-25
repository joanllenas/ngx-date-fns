import 'core-js';
import 'reflect-metadata';
import { DifferenceInMillisecondsPipe } from './difference-in-milliseconds.pipe';

describe('DifferenceInMillisecondsPipe', () => {
  var pipe: DifferenceInMillisecondsPipe;

  beforeEach(() => pipe = new DifferenceInMillisecondsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrow(new Error(DifferenceInMillisecondsPipe.NO_ARGS_ERROR));
  });

  it('should display the difference in milliseconds', () => {
    expect(pipe.transform(new Date(2014, 6, 2, 12, 30, 21, 700), new Date(2014, 6, 2, 12, 30, 20, 600)))
      .toBe(1100);
  });
});
