


import { AddHoursPipe } from './add-hours.pipe';

describe('AddHoursPipe', () => {
  let pipe: AddHoursPipe;

  beforeEach(() => pipe = new AddHoursPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, AddHoursPipe.NO_ARGS_ERROR);
  });

  it('should add 2 hours to 10 July 2014 23:00:00', () => {
    const date = new Date(2014, 6, 10, 23);
    expect(pipe.transform(date, 2))
      .toEqual(new Date(2014, 6, 11, 1));
  });
});
