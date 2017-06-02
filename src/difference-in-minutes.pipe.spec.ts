import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { DifferenceInMinutesPipe } from './difference-in-minutes.pipe';

describe('DifferenceInMinutesPipe', () => {
  var pipe: DifferenceInMinutesPipe;

  beforeEach(() => pipe = new DifferenceInMinutesPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, DifferenceInMinutesPipe.NO_ARGS_ERROR);
  });

  it('should display the difference in minutes', () => {
    expect(pipe.transform(new Date(2014, 6, 2, 12, 20, 0), new Date(2014, 6, 2, 12, 7, 59)))
      .to.equal(12);
  });
});
