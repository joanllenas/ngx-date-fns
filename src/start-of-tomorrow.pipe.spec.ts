import 'core-js';
import { expect } from 'chai';
import * as sinon from 'sinon';
import 'reflect-metadata';
import { StartOfTomorrowPipe } from './start-of-tomorrow.pipe';

describe('StartOfTomorrowPipe', () => {
  let pipe: StartOfTomorrowPipe;
  let clock;

  beforeEach(() => pipe = new StartOfTomorrowPipe());
  afterEach(() => {clock.restore()});

  it('should return the start of the day after October the 6th, 2014', () => {
    clock = sinon.useFakeTimers(new Date(2014, 9, 6).getTime());
    expect(pipe.transform())
      .to.eql(new Date(2014, 9, 7, 0, 0, 0, 0));
  });
});
