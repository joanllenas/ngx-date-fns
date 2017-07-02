import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetDaysInYearPipe } from './get-days-in-year.pipe';

describe('GetDaysInYearPipe', () => {
  var pipe: GetDaysInYearPipe;

  beforeEach(() => pipe = new GetDaysInYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetDaysInYearPipe.NO_ARGS_ERROR);
  });

  it('should display how many days are in 2012', () => {
    expect(pipe.transform(new Date(2012, 0, 1)))
      .to.equal(366);
  });
});
