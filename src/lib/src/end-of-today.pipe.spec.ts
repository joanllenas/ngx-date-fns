import { EndOfTodayPipe } from './end-of-today.pipe';

describe('EndOfTodayPipe', () => {
  let pipe: EndOfTodayPipe;

  beforeEach(() => {
    pipe = new EndOfTodayPipe();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2014, 9, 6));
  });
  afterEach(() => jasmine.clock().uninstall());

  it('should return the end of today if its October the 6th, 2014', () => {
    expect(pipe.transform()).toEqual(new Date(2014, 9, 6, 23, 59, 59, 999));
  });
});
