import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { SubHoursPipe } from './sub-hours.pipe';

describe('SubHoursPipe', () => {
  let pipe: SubHoursPipe;

  beforeEach(() => pipe = new SubHoursPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .to.throw(Error, SubHoursPipe.NO_ARGS_ERROR);
  });

  it('should subtract 2 hours from 11 July 2014 01:00:00', () => {
    const date = new Date(2014, 6, 11, 1, 0);
    expect(pipe.transform(date, 2))
      .to.eql(new Date(2014, 6, 10, 23, 0));
  });
});
