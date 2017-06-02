import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetDayPipe } from './get-day.pipe';

describe('GetDayPipe', () => {
  var pipe: GetDayPipe;

  beforeEach(() => pipe = new GetDayPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetDayPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29)))
      .to.equal(3);
  });
});
