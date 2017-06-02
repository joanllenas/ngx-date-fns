import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { MaxPipe } from './max.pipe';

describe('MaxPipe', () => {
  var pipe: MaxPipe;

  beforeEach(() => pipe = new MaxPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, MaxPipe.NO_ARGS_ERROR);
  });

  it('should throw when less than two dates are provided', () => {
      expect(() => pipe.transform([]))
        .to.throw(Error, MaxPipe.NO_ARGS_ERROR);
      expect(() => pipe.transform([new Date()]))
        .to.throw(Error, MaxPipe.NO_ARGS_ERROR);
  });

  it('should return the max date of two dates', () => {
    expect(pipe.transform([new Date(2012, 1, 29), new Date(2011, 1, 29)]))
      .to.eql(new Date(2012, 1, 29));
  });

  it('should return the max date of many dates', () => {
    const dates = [new Date(2010, 5, 9), new Date(2012, 1, 29), new Date(2011, 1, 29), new Date(2016, 2, 20)];
    expect(pipe.transform(dates))
      .to.eql(new Date(2016, 2, 20));
  });
});
