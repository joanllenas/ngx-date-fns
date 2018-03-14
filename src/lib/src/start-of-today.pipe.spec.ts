import { StartOfTodayPipe } from './start-of-today.pipe';

describe('StartOfTodayPipe', () => {
  let pipe: StartOfTodayPipe;

  beforeEach(() => {
    pipe = new StartOfTodayPipe();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2014, 9, 6));
  });
  afterEach(() => jasmine.clock().uninstall());

  it('should return the start of today if it\'s October the 6th, 2014', () => {
    expect(pipe.transform())
      .toEqual(new Date(2014, 9, 6, 0, 0, 0, 0));
  });
});
