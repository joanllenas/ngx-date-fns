import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { DifferenceInYearsPipe } from './difference-in-years.pipe';

describe('DifferenceInYearsPipe', () => {
  var pipe: DifferenceInYearsPipe;

  beforeEach(() => pipe = new DifferenceInYearsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, DifferenceInYearsPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in years', () => {
    expect(pipe.transform(new Date(2015, 1, 11), new Date(2013, 11, 31)))
      .to.equal(1);
  });
});
