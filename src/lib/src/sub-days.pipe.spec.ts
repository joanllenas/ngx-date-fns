


import { SubDaysPipe } from './sub-days.pipe';

describe('SubDaysPipe', () => {
  let pipe: SubDaysPipe;

  beforeEach(() => pipe = new SubDaysPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined, undefined))
        .toThrowError(Error, SubDaysPipe.NO_ARGS_ERROR);
  });

  it('should subtract 10 days from 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 10))
      .toEqual(new Date(2014, 7, 22));
  });
});
