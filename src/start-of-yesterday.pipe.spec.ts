import 'core-js';
import { expect } from 'chai';
import * as sinon from 'sinon';
import 'reflect-metadata';
import { StartOfYesterdayPipe } from './start-of-yesterday.pipe';

describe('StartOfYesterdayPipe', () => {
  let pipe: StartOfYesterdayPipe;
  let clock;

  beforeEach(() => pipe = new StartOfYesterdayPipe());
  afterEach(() => {clock.restore()});

  it('should return the start of the day before October the 6th, 2014', () => {
    clock = sinon.useFakeTimers(new Date(2014, 9, 6).getTime());
    expect(pipe.transform())
      .to.eql(new Date(2014, 9, 5, 0, 0, 0, 0));
  });
});
