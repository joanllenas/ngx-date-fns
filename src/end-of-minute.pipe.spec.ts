import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { EndOfMinutePipe } from './end-of-minute.pipe';

describe('EndOfMinutePipe', () => {
  var pipe: EndOfMinutePipe;

  beforeEach(() => pipe = new EndOfMinutePipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, EndOfMinutePipe.NO_ARGS_ERROR);
  });

  it('should return the end of minute for 1 December 2014 22:15:45.400', () => {
    const date = new Date(2014, 11, 1, 22, 15, 45, 400);
    expect(pipe.transform(date))
      .to.eql(new Date(2014, 11, 1, 22, 15, 59, 999));
  });
});
