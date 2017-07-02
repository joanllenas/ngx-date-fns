import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetDatePipe } from './get-date.pipe';

describe('GetDatePipe', () => {
  var pipe: GetDatePipe;

  beforeEach(() => pipe = new GetDatePipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetDatePipe.NO_ARGS_ERROR);
  });

  it('should display which day of the month is 29 February 2012', () => {
    expect(pipe.transform(new Date(2012, 1, 29)))
      .to.equal(29);
  });
});
