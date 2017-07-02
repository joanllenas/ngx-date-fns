import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { LastDayOfISOYearPipe } from './last-day-of-iso-year.pipe';

describe('LastDayOfISOYearPipe', () => {
  var pipe: LastDayOfISOYearPipe;

  beforeEach(() => pipe = new LastDayOfISOYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, LastDayOfISOYearPipe.NO_ARGS_ERROR);
  });

  it('should return the last day of ISO week-numbering year for 2 July 2005', () => {
    const date = new Date(2005, 6, 2);
    expect(pipe.transform(date))
      .to.eql(new Date(2006, 0, 1, 0, 0 , 0, 0));
  });
});
