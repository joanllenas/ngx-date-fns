import 'core-js';
import { expect } from 'chai';
import * as sinon from 'sinon';
import 'reflect-metadata';
import { EndOfYesterdayPipe } from './end-of-yesterday.pipe';

describe('EndOfYesterdayPipe', () => {
  let pipe: EndOfYesterdayPipe;
  let clock;

  beforeEach(() => pipe = new EndOfYesterdayPipe());
  afterEach(() => {clock.restore()});

  it('should return the end of the day before October the 6th, 2014', () => {
    clock = sinon.useFakeTimers(new Date(2014, 9, 6).getTime());
    expect(pipe.transform())
      .to.eql(new Date(2014, 9, 5, 23, 59, 59, 999));
  });
});
