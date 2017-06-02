import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { DifferenceInCalendarWeeksPipe } from './difference-in-calendar-weeks.pipe';

describe('DifferenceInCalendarWeeksPipe', () => {
  var pipe: DifferenceInCalendarWeeksPipe;

  beforeEach(() => pipe = new DifferenceInCalendarWeeksPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, DifferenceInCalendarWeeksPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in calendar weeks', () => {
    expect(pipe.transform(new Date(2014, 6, 20), new Date(2014, 6, 5)))
      .to.equal(3);
  });

  it('should display the difference in calendar weeks when week starts on Monday', () => {
    expect(pipe.transform(new Date(2014, 6, 20), new Date(2014, 6, 5), {weekStartsOn: 1}))
      .to.equal(2);
  });
});
