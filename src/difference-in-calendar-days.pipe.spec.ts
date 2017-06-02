import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { DifferenceInCalendarDaysPipe } from './difference-in-calendar-days.pipe';

describe('DifferenceInCalendarDaysPipe', () => {
  var pipe: DifferenceInCalendarDaysPipe;

  beforeEach(() => pipe = new DifferenceInCalendarDaysPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, DifferenceInCalendarDaysPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in calendar days', () => {
    expect(pipe.transform(new Date(2012, 6, 2, 0, 0), new Date(2011, 6, 2, 23, 0)))
      .to.equal(366);
  });
});
