import { StartOfTomorrowPipe } from './start-of-tomorrow.pipe';

describe('StartOfTomorrowPipe', () => {
  let pipe: StartOfTomorrowPipe;

  beforeEach(() => {
    pipe = new StartOfTomorrowPipe();
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date(2014, 9, 6));
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return the start of the day after October the 6th, 2014', () => {
    expect(pipe.transform()).toEqual(new Date(2014, 9, 7, 0, 0, 0, 0));
  });
});
