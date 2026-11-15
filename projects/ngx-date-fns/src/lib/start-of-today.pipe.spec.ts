import { StartOfTodayPipe } from './start-of-today.pipe';

describe('StartOfTodayPipe', () => {
  let pipe: StartOfTodayPipe;

  beforeEach(() => {
    pipe = new StartOfTodayPipe();
    vi.useRealTimers();
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2014, 9, 6));
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it(`should return the start of today if it's October the 6th, 2014`, () => {
    expect(pipe.transform()).toEqual(new Date(2014, 9, 6, 0, 0, 0, 0));
  });
});
