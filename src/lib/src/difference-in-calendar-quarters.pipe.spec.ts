


import { DifferenceInCalendarQuartersPipe } from './difference-in-calendar-quarters.pipe';

describe('DifferenceInCalendarQuartersPipe', () => {
  let pipe: DifferenceInCalendarQuartersPipe;

  beforeEach(() => pipe = new DifferenceInCalendarQuartersPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, DifferenceInCalendarQuartersPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in calendar quarters', () => {
    expect(pipe.transform(new Date(2014, 6, 2), new Date(2013, 11, 31)))
      .toBe(3);
  });
});
