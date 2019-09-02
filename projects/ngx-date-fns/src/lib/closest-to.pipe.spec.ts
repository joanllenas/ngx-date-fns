import { ClosestToPipe } from './closest-to.pipe';

describe('ClosestToPipe', () => {
  let pipe: ClosestToPipe;

  beforeEach(() => (pipe = new ClosestToPipe()));

  it('should return the closest date to the two given dates', () => {
    expect(
      pipe.transform(new Date(2012, 1, 1), [
        new Date(2012, 1, 29),
        new Date(2011, 1, 29)
      ])
    ).toEqual(new Date(2012, 1, 29));
  });

  it('should return the closest date to the many given dates', () => {
    const dates = [
      new Date(2010, 5, 9),
      new Date(2012, 1, 29),
      new Date(2011, 1, 29),
      new Date(2016, 2, 20)
    ];
    expect(pipe.transform(new Date(2011, 2, 2), dates)).toEqual(
      new Date(2011, 1, 29)
    );
  });
});
