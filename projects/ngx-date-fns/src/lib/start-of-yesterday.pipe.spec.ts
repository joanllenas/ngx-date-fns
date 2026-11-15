import { StartOfYesterdayPipe } from './start-of-yesterday.pipe';

describe('StartOfYesterdayPipe', () => {
  let pipe: StartOfYesterdayPipe;

  beforeEach(() => {
    pipe = new StartOfYesterdayPipe();
    vi.useRealTimers();
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2014, 9, 6));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return the start of the day before October the 6th, 2014', () => {
    expect(pipe.transform()).toEqual(new Date(2014, 9, 5, 0, 0, 0, 0));
  });
});
