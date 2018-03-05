


import { AddISOYearsPipe } from './add-iso-years.pipe';

describe('AddISOYearsPipe', () => {
  let pipe: AddISOYearsPipe;

  beforeEach(() => pipe = new AddISOYearsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, AddISOYearsPipe.NO_ARGS_ERROR);
  });

  it('should add 5 ISO week-numbering years to 2 July 2010', () => {
    const date = new Date(2010, 6, 2);
    expect(pipe.transform(date, 5))
      .toEqual(new Date(2015, 5, 26));
  });
});
