import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetISOWeekPipe } from './get-iso-week.pipe';

describe('GetISOWeekPipe', () => {
  var pipe: GetISOWeekPipe;

  beforeEach(() => pipe = new GetISOWeekPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetISOWeekPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2005, 0, 2)))
      .to.equal(53);
  });
});
