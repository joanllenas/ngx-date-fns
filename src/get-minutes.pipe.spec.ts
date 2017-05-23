import 'core-js';
import 'reflect-metadata';
import { GetMinutesPipe } from './get-minutes.pipe';

describe('GetMinutesPipe', () => {
  var pipe: GetMinutesPipe;

  beforeEach(() => pipe = new GetMinutesPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetMinutesPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29, 11, 45, 5)))
      .toBe(45);
  });
});
