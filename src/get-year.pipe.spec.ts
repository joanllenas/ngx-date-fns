import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetYearPipe } from './get-year.pipe';

describe('GetYearPipe', () => {
  var pipe: GetYearPipe;

  beforeEach(() => pipe = new GetYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetYearPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2)))
      .to.equal(2014);
  });
});
