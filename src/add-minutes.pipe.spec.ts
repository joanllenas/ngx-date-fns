import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { AddMinutesPipe } from './add-minutes.pipe';

describe('AddMinutesPipe', () => {
  let pipe: AddMinutesPipe;

  beforeEach(() => pipe = new AddMinutesPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, AddMinutesPipe.NO_ARGS_ERROR);
  });

  it('should add 30 minutes to 10 July 2014 12:00:00', () => {
    const date = new Date(2014, 6, 10, 12, 0);
    expect(pipe.transform(date, 30))
      .to.eql(new Date(2014, 6, 10, 12, 30));
  });
});
