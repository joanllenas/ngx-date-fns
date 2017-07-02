import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { EndOfSecondPipe } from './end-of-second.pipe';

describe('EndOfSecondPipe', () => {
  var pipe: EndOfSecondPipe;

  beforeEach(() => pipe = new EndOfSecondPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, EndOfSecondPipe.NO_ARGS_ERROR);
  });

  it('should return the end of second for 1 December 2014 22:15:45.400', () => {
    const date = new Date(2014, 11, 1, 22, 15, 45, 400);
    expect(pipe.transform(date))
      .to.eql(new Date(2014, 11, 1, 22, 15, 45, 999));
  });
});
