import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { SubQuartersPipe } from './sub-quarters.pipe';

describe('SubQuartersPipe', () => {
  let pipe: SubQuartersPipe;

  beforeEach(() => pipe = new SubQuartersPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, SubQuartersPipe.NO_ARGS_ERROR);
  });

  it('should subtract 3 quarters from 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 3))
      .to.eql(new Date(2013, 11, 1));
  });
});
