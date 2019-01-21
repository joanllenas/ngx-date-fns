import { SubMinutesPipe } from './sub-minutes.pipe';

describe('SubMinutesPipe', () => {
  let pipe: SubMinutesPipe;

  beforeEach(() => (pipe = new SubMinutesPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined, undefined)).toThrowError(
      Error,
      SubMinutesPipe.NO_ARGS_ERROR
    );
  });

  it('should subtract 30 minutes from 10 July 2014 12:00:00', () => {
    const date = new Date(2014, 6, 10, 12, 0);
    expect(pipe.transform(date, 30)).toEqual(new Date(2014, 6, 10, 11, 30));
  });
});
