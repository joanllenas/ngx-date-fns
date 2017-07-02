import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { LastDayOfYearPipe } from './last-day-of-year.pipe';

describe('LastDayOfYearPipe', () => {
  var pipe: LastDayOfYearPipe;

  beforeEach(() => pipe = new LastDayOfYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, LastDayOfYearPipe.NO_ARGS_ERROR);
  });

  it('should return the last day of year for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .to.eql(new Date(2014, 11, 31, 0, 0 , 0, 0));
  });
});
