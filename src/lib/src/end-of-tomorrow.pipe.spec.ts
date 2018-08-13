import { EndOfTomorrowPipe } from './end-of-tomorrow.pipe';

describe('EndOfTomorrowPipe', () => {
  let pipe: EndOfTomorrowPipe;

  beforeEach(() => {
    pipe = new EndOfTomorrowPipe();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2014, 9, 6));
  });
  afterEach(() => jasmine.clock().uninstall());

  it('should return the end of the day after October the 6th, 2014', () => {
    expect(pipe.transform()).toEqual(new Date(2014, 9, 7, 23, 59, 59, 999));
  });
});
