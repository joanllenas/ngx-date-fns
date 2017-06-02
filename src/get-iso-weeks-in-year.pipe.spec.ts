import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetISOWeeksInYearPipe } from './get-iso-weeks-in-year.pipe';

describe('GetISOWeeksInYearPipe', () => {
  var pipe: GetISOWeeksInYearPipe;

  beforeEach(() => pipe = new GetISOWeeksInYearPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetISOWeeksInYearPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2015, 1, 11)))
      .to.equal(53);
  });
});
