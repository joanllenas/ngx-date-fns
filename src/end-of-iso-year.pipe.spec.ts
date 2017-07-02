import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { EndOfISOYearPipe } from './end-of-iso-year.pipe';

describe('EndOfISOYearPipe', () => {
  var pipe: EndOfISOYearPipe;

  beforeEach(() => pipe = new EndOfISOYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, EndOfISOYearPipe.NO_ARGS_ERROR);
  });

  it('should return the end of the ISO week-numbering year for 2 July 2005', () => {
    const date = new Date(2005, 6, 2);
    expect(pipe.transform(date))
      .to.eql(new Date(2006, 0, 1, 23, 59 , 59, 999));
  });
});
