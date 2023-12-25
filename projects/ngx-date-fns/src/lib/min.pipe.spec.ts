import { MinPipe } from './min.pipe';

describe('MinPipe', () => {
  let pipe: MinPipe;

  beforeEach(() => (pipe = new MinPipe()));

  it('should return the min date of two dates', () => {
    expect(
      pipe.transform([new Date(2012, 1, 29), new Date(2011, 1, 29)])
    ).toEqual(new Date(2011, 1, 29));
  });

  it('should return the min date of many dates', () => {
    const dates = [
      new Date(2010, 5, 9),
      new Date(2012, 1, 29),
      new Date(2009, 1, 9),
      new Date(2016, 2, 20)
    ];
    expect(pipe.transform(dates)).toEqual(new Date(2009, 1, 9));
  });
});
