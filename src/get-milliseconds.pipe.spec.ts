import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetMillisecondsPipe } from './get-milliseconds.pipe';

describe('GetMillisecondsPipe', () => {
  var pipe: GetMillisecondsPipe;

  beforeEach(() => pipe = new GetMillisecondsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetMillisecondsPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29, 11, 45, 5, 123)))
      .to.equal(123);
  });
});
