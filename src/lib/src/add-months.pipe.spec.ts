import { AddMonthsPipe } from './add-months.pipe';

describe('AddMonthsPipe', () => {
  let pipe: AddMonthsPipe;

  beforeEach(() => pipe = new AddMonthsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, AddMonthsPipe.NO_ARGS_ERROR);
  });

  it('should add 5 months to 1 September 2014', () => {
    const date = new Date(2014, 8, 1);
    expect(pipe.transform(date, 5))
      .toEqual(new Date(2015, 1, 1));
  });
});
