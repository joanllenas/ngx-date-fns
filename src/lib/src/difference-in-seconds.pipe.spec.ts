


import { DifferenceInSecondsPipe } from './difference-in-seconds.pipe';

describe('DifferenceInSecondsPipe', () => {
  let pipe: DifferenceInSecondsPipe;

  beforeEach(() => pipe = new DifferenceInSecondsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined, undefined))
        .toThrowError(Error, DifferenceInSecondsPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in seconds', () => {
    expect(pipe.transform(new Date(2014, 6, 2, 12, 30, 20, 0), new Date(2014, 6, 2, 12, 30, 7, 999)))
      .toBe(12);
  });
});
