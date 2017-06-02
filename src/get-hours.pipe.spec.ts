import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { GetHoursPipe } from './get-hours.pipe';

describe('GetHoursPipe', () => {
  var pipe: GetHoursPipe;

  beforeEach(() => pipe = new GetHoursPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, GetHoursPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29, 11, 45)))
      .to.equal(11);
  });
});
