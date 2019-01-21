import { AddMinutesPipe } from './add-minutes.pipe';

describe('AddMinutesPipe', () => {
  let pipe: AddMinutesPipe;

  beforeEach(() => (pipe = new AddMinutesPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined, undefined)).toThrowError(
      Error,
      AddMinutesPipe.NO_ARGS_ERROR
    );
  });

  it('should add 30 minutes to 10 July 2014 12:00:00', () => {
    const date = new Date(2014, 6, 10, 12, 0);
    expect(pipe.transform(date, 30)).toEqual(new Date(2014, 6, 10, 12, 30));
  });
});
