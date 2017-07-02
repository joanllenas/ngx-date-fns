import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { StartOfDayPipe } from './start-of-day.pipe';

describe('StartOfDayPipe', () => {
  var pipe: StartOfDayPipe;

  beforeEach(() => pipe = new StartOfDayPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, StartOfDayPipe.NO_ARGS_ERROR);
  });

  it('should return start of day for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .to.eql(new Date(2014, 8, 2, 0, 0, 0));
  });
});
