import { SubISOWeekYearsPipe } from './sub-iso-week-years.pipe';

describe('SubISOWeekYearsPipe', () => {
  let pipe: SubISOWeekYearsPipe;

  beforeEach(() => (pipe = new SubISOWeekYearsPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined, undefined)).toThrowError(
      Error,
      SubISOWeekYearsPipe.NO_ARGS_ERROR
    );
  });

  it('should subtract 5 ISO week-numbering years from 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 5)).toEqual(new Date(2009, 7, 31));
  });
});
