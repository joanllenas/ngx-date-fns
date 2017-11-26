


import { SubSecondsPipe } from './sub-seconds.pipe';

describe('SubSecondsPipe', () => {
  let pipe: SubSecondsPipe;

  beforeEach(() => pipe = new SubSecondsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, SubSecondsPipe.NO_ARGS_ERROR);
  });

  it('should subtract 30 seconds from 10 July 2014 12:45:00', () => {
    const date = new Date(2014, 6, 10, 12, 45, 0);
    expect(pipe.transform(date, 30))
      .toEqual(new Date(2014, 6, 10, 12, 44, 30));
  });
});
