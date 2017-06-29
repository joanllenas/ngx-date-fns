import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { AddWeeksPipe } from './add-weeks.pipe';

describe('AddWeeksPipe', () => {
  let pipe: AddWeeksPipe;

  beforeEach(() => pipe = new AddWeeksPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, AddWeeksPipe.NO_ARGS_ERROR);
  });

  it('should add 4 weeks to 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 4))
      .to.eql(new Date(2014, 8, 29));
  });
});
