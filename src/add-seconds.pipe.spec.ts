import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { AddSecondsPipe } from './add-seconds.pipe';

describe('AddSecondsPipe', () => {
  let pipe: AddSecondsPipe;

  beforeEach(() => pipe = new AddSecondsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, AddSecondsPipe.NO_ARGS_ERROR);
  });

  it('should add 30 seconds to 10 July 2014 12:45:00', () => {
    const date = new Date(2014, 6, 10, 12, 45, 0);
    expect(pipe.transform(date, 30))
      .to.eql(new Date(2014, 6, 10, 12, 45, 30));
  });
});
