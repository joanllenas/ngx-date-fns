import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetQuarterPipe } from './get-quarter.pipe';

describe('GetQuarterPipe', () => {
  var pipe: GetQuarterPipe;

  beforeEach(() => pipe = new GetQuarterPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetQuarterPipe.NO_ARGS_ERROR);
  });

  it('should display which quarter is 2 July 2014', () => {
    expect(pipe.transform(new Date(2014, 6, 2)))
      .to.equal(3);
  });
});
