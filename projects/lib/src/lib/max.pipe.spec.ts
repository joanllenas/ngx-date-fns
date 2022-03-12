import { MaxPipe } from './max.pipe';

describe('MaxPipe', () => {
  let pipe: MaxPipe;

  beforeEach(() => (pipe = new MaxPipe()));

  it('should return the max date of two dates', () => {
    expect(
      pipe.transform([new Date(2012, 1, 29), new Date(2011, 1, 29)])
    ).toEqual(new Date(2012, 1, 29));
  });

  it('should return the max date of many dates', () => {
    const dates = [
      new Date(2010, 5, 9),
      new Date(2012, 1, 29),
      new Date(2011, 1, 29),
      new Date(2016, 2, 20)
    ];
    expect(pipe.transform(dates)).toEqual(new Date(2016, 2, 20));
  });
});
