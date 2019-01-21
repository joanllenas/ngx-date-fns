import { EndOfTodayPipe } from './end-of-today.pipe';

describe('EndOfTodayPipe', () => {
  let pipe: EndOfTodayPipe;

  beforeEach(() => {
    pipe = new EndOfTodayPipe();
    jasmine.clock().uninstall();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2014, 9, 6));
  });

  it("should return the end of today if it's October the 6th, 2014", () => {
    expect(pipe.transform()).toEqual(new Date(2014, 9, 6, 23, 59, 59, 999));
  });
});
