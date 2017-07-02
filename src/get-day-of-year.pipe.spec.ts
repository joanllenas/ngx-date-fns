import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetDayOfYearPipe } from './get-day-of-year.pipe';

describe('GetDayOfYearPipe', () => {
  var pipe: GetDayOfYearPipe;

  beforeEach(() => pipe = new GetDayOfYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetDayOfYearPipe.NO_ARGS_ERROR);
  });

  it('should display which day of the year is 2 July 2014', () => {
    expect(pipe.transform(new Date(2014, 6, 2)))
      .to.equal(183);
  });
});
