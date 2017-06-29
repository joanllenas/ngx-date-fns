import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { SubYearsPipe } from './sub-years.pipe';

describe('SubYearsPipe', () => {
  let pipe: SubYearsPipe;

  beforeEach(() => pipe = new SubYearsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, SubYearsPipe.NO_ARGS_ERROR);
  });

  it('should subtract 5 years from 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 5))
      .to.eql(new Date(2009, 8, 1));
  });
});
