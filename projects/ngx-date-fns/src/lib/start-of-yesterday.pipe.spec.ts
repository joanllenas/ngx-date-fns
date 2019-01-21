import { StartOfYesterdayPipe } from './start-of-yesterday.pipe';

describe('StartOfYesterdayPipe', () => {
  let pipe: StartOfYesterdayPipe;

  beforeEach(() => {
    pipe = new StartOfYesterdayPipe();
    jasmine.clock().uninstall();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2014, 9, 6));
  });

  it('should return the start of the day before October the 6th, 2014', () => {
    expect(pipe.transform()).toEqual(new Date(2014, 9, 5, 0, 0, 0, 0));
  });
});
