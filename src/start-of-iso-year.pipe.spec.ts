import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { StartOfISOYearPipe } from './start-of-iso-year.pipe';

describe('StartOfISOYearPipe', () => {
  var pipe: StartOfISOYearPipe;

  beforeEach(() => pipe = new StartOfISOYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, StartOfISOYearPipe.NO_ARGS_ERROR);
  });

  it('should return the start of ISO week-numbering year for 2 July 2005', () => {
    const date = new Date(2005, 6, 2);
    expect(pipe.transform(date))
      .to.eql(new Date(2005, 0, 3, 0, 0, 0));
  });
});
