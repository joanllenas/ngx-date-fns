import { AddDaysPipe } from './add-days.pipe';

describe('AddDaysPipe', () => {
  let pipe: AddDaysPipe;

  beforeEach(() => pipe = new AddDaysPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, AddDaysPipe.NO_ARGS_ERROR);
  });

  it('should add 10 days to 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 10))
      .toEqual(new Date(2014, 8, 11));
  });
});
