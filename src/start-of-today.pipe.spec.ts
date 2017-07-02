import 'core-js';
import { expect } from 'chai';
import * as sinon from 'sinon';
import 'reflect-metadata';
import { StartOfTodayPipe } from './start-of-today.pipe';

describe('StartOfTodayPipe', () => {
  let pipe: StartOfTodayPipe;
  let clock;

  beforeEach(() => pipe = new StartOfTodayPipe());
  afterEach(() => {clock.restore()});

  it('should return the start of today if it\'s October the 6th, 2014', () => {
    clock = sinon.useFakeTimers(new Date(2014, 9, 6).getTime());
    expect(pipe.transform())
      .to.eql(new Date(2014, 9, 6, 0, 0, 0, 0));
  });
});
