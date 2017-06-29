import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { AddMillisecondsPipe } from './add-milliseconds.pipe';

describe('AddMillisecondsPipe', () => {
  let pipe: AddMillisecondsPipe;

  beforeEach(() => pipe = new AddMillisecondsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, AddMillisecondsPipe.NO_ARGS_ERROR);
  });

  it('should add 750 milliseconds to 10 July 2014 12:45:30.000', () => {
    const date = new Date(2014, 6, 10, 12, 45, 30, 0);
    expect(pipe.transform(date, 750))
      .to.eql(new Date(2014, 6, 10, 12, 45, 30, 750));
  });
});

