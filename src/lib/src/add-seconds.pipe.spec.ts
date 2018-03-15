


import { AddSecondsPipe } from './add-seconds.pipe';

describe('AddSecondsPipe', () => {
  let pipe: AddSecondsPipe;

  beforeEach(() => pipe = new AddSecondsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, AddSecondsPipe.NO_ARGS_ERROR);
  });

  it('should add 30 seconds to 10 July 2014 12:45:00', () => {
    const date = new Date(2014, 6, 10, 12, 45, 0);
    expect(pipe.transform(date, 30))
      .toEqual(new Date(2014, 6, 10, 12, 45, 30));
  });
});
