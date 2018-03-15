import { AddMillisecondsPipe } from './add-milliseconds.pipe';

describe('AddMillisecondsPipe', () => {
  let pipe: AddMillisecondsPipe;

  beforeEach(() => pipe = new AddMillisecondsPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrowError(Error, AddMillisecondsPipe.NO_ARGS_ERROR);
  });

  it('should add 750 milliseconds to 10 July 2014 12:45:30.000', () => {
    const date = new Date(2014, 6, 10, 12, 45, 30, 0);
    expect(pipe.transform(date, 750))
      .toEqual(new Date(2014, 6, 10, 12, 45, 30, 750));
  });
});

