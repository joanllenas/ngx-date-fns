import 'core-js';
import { expect } from 'chai';
import * as sinon from 'sinon';
import 'reflect-metadata';
import { EndOfTodayPipe } from './end-of-today.pipe';

describe('EndOfTodayPipe', () => {
  let pipe: EndOfTodayPipe;
  let clock;

  beforeEach(() => pipe = new EndOfTodayPipe());
  afterEach(() => {clock.restore()});

  it('should return the end of today if it\'s October the 6th, 2014', () => {
    clock = sinon.useFakeTimers(new Date(2014, 9, 6).getTime());
    expect(pipe.transform())
      .to.eql(new Date(2014, 9, 6, 23, 59, 59, 999));
  });
});
