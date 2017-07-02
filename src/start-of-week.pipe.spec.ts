import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { StartOfWeekPipe } from './start-of-week.pipe';

describe('StartOfWeekPipe', () => {
  var pipe: StartOfWeekPipe;

  beforeEach(() => pipe = new StartOfWeekPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, StartOfWeekPipe.NO_ARGS_ERROR);
  });

  it('should return the start of a week for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .to.eql(new Date(2014, 7, 31, 0, 0 , 0, 0));
  });

  it('should return the start of week for 2 September 2014 11:55:00 if the week starts on Monday', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date, {weekStartsOn: 1}))
      .to.eql(new Date(2014, 8, 1, 0, 0 , 0, 0));
  });
});
