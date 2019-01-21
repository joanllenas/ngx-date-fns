import { StartOfTomorrowPipe } from './start-of-tomorrow.pipe';

describe('StartOfTomorrowPipe', () => {
  let pipe: StartOfTomorrowPipe;

  beforeEach(() => {
    pipe = new StartOfTomorrowPipe();
    jasmine.clock().uninstall();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2014, 9, 6));
  });

  it('should return the start of the day after October the 6th, 2014', () => {
    expect(pipe.transform()).toEqual(new Date(2014, 9, 7, 0, 0, 0, 0));
  });
});
