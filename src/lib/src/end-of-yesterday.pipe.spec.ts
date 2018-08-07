import { EndOfYesterdayPipe } from './end-of-yesterday.pipe';

describe('EndOfYesterdayPipe', () => {
  let pipe: EndOfYesterdayPipe;

  beforeEach(() => {
    pipe = new EndOfYesterdayPipe();
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date(2014, 9, 6));
  });
  afterEach(() => jasmine.clock().uninstall());

  it('should return the end of the day before October the 6th, 2014', () => {
    expect(pipe.transform()).toEqual(new Date(2014, 9, 5, 23, 59, 59, 999));
  });
});
