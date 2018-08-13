import { GetOverlappingDaysInIntervalsPipe } from './get-overlapping-days-in-intervals.pipe';

describe('GetOverlappingDaysInIntervalsPipe', () => {
  let pipe: GetOverlappingDaysInIntervalsPipe;

  beforeEach(() => (pipe = new GetOverlappingDaysInIntervalsPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined, undefined)).toThrowError(
      Error,
      GetOverlappingDaysInIntervalsPipe.NO_ARGS_ERROR
    );
  });

  it('should display output correctly for overlapping days', () => {
    expect(
      pipe.transform(
        { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
        { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
      )
    ).toBe(3);
  });

  it('should display 0 for non-overlapping days', () => {
    expect(
      pipe.transform(
        { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
        { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
      )
    ).toBe(0);
  });
});
