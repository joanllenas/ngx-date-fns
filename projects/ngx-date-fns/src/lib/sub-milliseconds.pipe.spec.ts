import { SubMillisecondsPipe } from './sub-milliseconds.pipe';

describe('SubMillisecondsPipe', () => {
  let pipe: SubMillisecondsPipe;

  beforeEach(() => (pipe = new SubMillisecondsPipe()));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform.call(pipe, undefined, undefined)).toThrowError(
      Error,
      SubMillisecondsPipe.NO_ARGS_ERROR
    );
  });

  it('should subtract 750 milliseconds from 10 July 2014 12:45:30.000', () => {
    const date = new Date(2014, 6, 10, 12, 45, 30, 0);
    expect(pipe.transform(date, 750)).toEqual(
      new Date(2014, 6, 10, 12, 45, 29, 250)
    );
  });
});
