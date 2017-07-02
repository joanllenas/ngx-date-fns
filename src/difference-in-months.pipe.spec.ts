import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { DifferenceInMonthsPipe } from './difference-in-months.pipe';

describe('DifferenceInMonthsPipe', () => {
  var pipe: DifferenceInMonthsPipe;

  beforeEach(() => pipe = new DifferenceInMonthsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, DifferenceInMonthsPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in months', () => {
    expect(pipe.transform(new Date(2014, 8, 1), new Date(2014, 0, 31)))
      .to.equal(7);
  });
});
