import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { StartOfMonthPipe } from './start-of-month.pipe';

describe('StartOfMonthPipe', () => {
  var pipe: StartOfMonthPipe;

  beforeEach(() => pipe = new StartOfMonthPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, StartOfMonthPipe.NO_ARGS_ERROR);
  });

  it('should return the start of month for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .to.eql(new Date(2014, 8, 1, 0, 0, 0));
  });
});
