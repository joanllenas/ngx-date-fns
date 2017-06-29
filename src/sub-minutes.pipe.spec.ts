import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { SubMinutesPipe } from './sub-minutes.pipe';

describe('SubMinutesPipe', () => {
  let pipe: SubMinutesPipe;

  beforeEach(() => pipe = new SubMinutesPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, SubMinutesPipe.NO_ARGS_ERROR);
  });

  it('should subtract 30 minutes from 10 July 2014 12:00:00', () => {
    const date = new Date(2014, 6, 10, 12, 0);
    expect(pipe.transform(date, 30))
      .to.eql(new Date(2014, 6, 10, 11, 30));
  });
});
