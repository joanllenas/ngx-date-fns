import { GetOverlappingDaysInRangesPipe } from './get-overlapping-days-in-ranges.pipe';

describe('GetOverlappingDaysInRangesPipe', () => {
  let pipe: GetOverlappingDaysInRangesPipe;

  beforeEach(() => (pipe = new GetOverlappingDaysInRangesPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() =>
      pipe.transform.call(pipe, undefined, undefined, undefined, undefined)
    ).toThrowError(Error, GetOverlappingDaysInRangesPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly for overlapping days', () => {
    expect(
      pipe.transform(
        new Date(2014, 0, 10),
        new Date(2014, 0, 20),
        new Date(2014, 0, 17),
        new Date(2014, 0, 21)
      )
    ).toBe(3);
  });

  it('should display 0 for non-overlapping days', () => {
    expect(
      pipe.transform(
        new Date(2014, 0, 10),
        new Date(2014, 0, 20),
        new Date(2014, 0, 21),
        new Date(2014, 0, 22)
      )
    ).toBe(0);
  });
});
