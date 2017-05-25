import 'core-js';
import 'reflect-metadata';
import { DifferenceInHoursPipe } from './difference-in-hours.pipe';

describe('DifferenceInHoursPipe', () => {
  var pipe: DifferenceInHoursPipe;

  beforeEach(() => pipe = new DifferenceInHoursPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrow(new Error(DifferenceInHoursPipe.NO_ARGS_ERROR));
  });

  it('should display the difference in hours', () => {
    expect(pipe.transform(new Date(2014, 6, 2, 19, 0), new Date(2014, 6, 2, 6, 50)))
      .toBe(12);
  });
});
