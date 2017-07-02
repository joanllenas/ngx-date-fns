import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetISOYearPipe } from './get-iso-year.pipe';

describe('GetISOYearPipe', () => {
  var pipe: GetISOYearPipe;

  beforeEach(() => pipe = new GetISOYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetISOYearPipe.NO_ARGS_ERROR);
  });

  it('should display which ISO-week numbering year is 2 January 2005', () => {
    expect(pipe.transform(new Date(2005, 0, 2)))
      .to.equal(2004);
  });
});
