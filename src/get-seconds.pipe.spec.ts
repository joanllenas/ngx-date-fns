import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetSecondsPipe } from './get-seconds.pipe';

describe('GetSecondsPipe', () => {
  var pipe: GetSecondsPipe;

  beforeEach(() => pipe = new GetSecondsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetSecondsPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29, 11, 45, 5, 123)))
      .to.equal(5);
  });
});
