import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetMonthPipe } from './get-month.pipe';

describe('GetMonthPipe', () => {
  var pipe: GetMonthPipe;

  beforeEach(() => pipe = new GetMonthPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetMonthPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29)))
      .to.equal(1);
  });
});
