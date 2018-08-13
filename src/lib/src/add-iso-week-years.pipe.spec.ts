import { AddISOWeekYearsPipe } from './add-iso-week-years.pipe';

describe('AddISOWeekYearsPipe', () => {
  let pipe: AddISOWeekYearsPipe;

  beforeEach(() => (pipe = new AddISOWeekYearsPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined, undefined)).toThrowError(
      Error,
      AddISOWeekYearsPipe.NO_ARGS_ERROR
    );
  });

  it('should add 5 ISO week-numbering years to 2 July 2010', () => {
    const date = new Date(2010, 6, 2);
    expect(pipe.transform(date, 5)).toEqual(new Date(2015, 5, 26));
  });
});
