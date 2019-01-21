import { StartOfISOYearPipe } from './start-of-iso-year.pipe';

describe('StartOfISOYearPipe', () => {
  let pipe: StartOfISOYearPipe;

  beforeEach(() => (pipe = new StartOfISOYearPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined)).toThrowError(
      Error,
      StartOfISOYearPipe.NO_ARGS_ERROR
    );
  });

  it('should return the start of ISO week-numbering year for 2 July 2005', () => {
    const date = new Date(2005, 6, 2);
    expect(pipe.transform(date)).toEqual(new Date(2005, 0, 3, 0, 0, 0));
  });
});
