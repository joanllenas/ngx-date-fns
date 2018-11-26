


import { SubYearsPipe } from './sub-years.pipe';

describe('SubYearsPipe', () => {
  let pipe: SubYearsPipe;

  beforeEach(() => pipe = new SubYearsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform.call(pipe, undefined, undefined))
        .toThrowError(Error, SubYearsPipe.NO_ARGS_ERROR);
  });

  it('should subtract 5 years from 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 5))
      .toEqual(new Date(2009, 8, 1));
  });
});
