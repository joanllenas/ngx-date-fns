import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { SubWeeksPipe } from './sub-weeks.pipe';

describe('SubWeeksPipe', () => {
  let pipe: SubWeeksPipe;

  beforeEach(() => pipe = new SubWeeksPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, SubWeeksPipe.NO_ARGS_ERROR);
  });

  it('should subtract 4 weeks from 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 4))
      .to.eql(new Date(2014, 7, 4));
  });
});
