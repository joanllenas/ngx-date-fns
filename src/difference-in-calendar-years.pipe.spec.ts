import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { DifferenceInCalendarYearsPipe } from './difference-in-calendar-years.pipe';

describe('DifferenceInCalendarYearsPipe', () => {
  var pipe: DifferenceInCalendarYearsPipe;

  beforeEach(() => pipe = new DifferenceInCalendarYearsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, DifferenceInCalendarYearsPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in calendar years', () => {
    expect(pipe.transform(new Date(2015, 1, 11), new Date(2013, 11, 31)))
      .to.equal(2);
  });
});
