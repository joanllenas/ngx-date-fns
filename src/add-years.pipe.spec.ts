import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { AddYearsPipe } from './add-years.pipe';

describe('AddYearsPipe', () => {
  let pipe: AddYearsPipe;

  beforeEach(() => pipe = new AddYearsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, AddYearsPipe.NO_ARGS_ERROR);
  });

  it('should add 5 years to 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 5))
      .to.eql(new Date(2019, 8, 1));
  });
});
