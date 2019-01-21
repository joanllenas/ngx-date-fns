import { AddQuartersPipe } from './add-quarters.pipe';

describe('AddQuartersPipe', () => {
  let pipe: AddQuartersPipe;

  beforeEach(() => (pipe = new AddQuartersPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined, undefined)).toThrowError(
      Error,
      AddQuartersPipe.NO_ARGS_ERROR
    );
  });

  it('should add 1 quarter to 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 1)).toEqual(new Date(2014, 11, 1));
  });
});
