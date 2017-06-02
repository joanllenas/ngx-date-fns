import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetOverlappingDaysInRangesPipe } from './get-overlapping-days-in-ranges.pipe';

describe('GetOverlappingDaysInRangesPipe', () => {
  var pipe: GetOverlappingDaysInRangesPipe;

  beforeEach(() => pipe = new GetOverlappingDaysInRangesPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined, undefined, undefined))
        .to.throw(Error, GetOverlappingDaysInRangesPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly for overlapping days', () => {
    expect(pipe.transform(new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)))
      .to.equal(3);
  });

  it('should display 0 for non-overlapping days', () => {
    expect(pipe.transform(new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)))
      .to.equal(0);
  });
});
