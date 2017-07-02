import 'core-js';
import { expect } from 'chai';
import * as sinon from 'sinon';
import 'reflect-metadata';
import { EndOfTomorrowPipe } from './end-of-tomorrow.pipe';

describe('EndOfTomorrowPipe', () => {
  let pipe: EndOfTomorrowPipe;
  let clock;

  beforeEach(() => pipe = new EndOfTomorrowPipe());
  afterEach(() => {clock.restore()});

  it('should return the end of the day after October the 6th, 2014', () => {
    clock = sinon.useFakeTimers(new Date(2014, 9, 6).getTime());
    expect(pipe.transform())
      .to.eql(new Date(2014, 9, 7, 23, 59, 59, 999));
  });
});
