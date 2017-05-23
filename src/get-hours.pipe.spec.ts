import 'core-js';
import 'reflect-metadata';
import { GetHoursPipe } from './get-hours.pipe';

describe('GetHoursPipe', () => {
  var pipe: GetHoursPipe;

  beforeEach(() => pipe = new GetHoursPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .toThrow(new Error(GetHoursPipe.NO_ARGS_ERROR));
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2012, 1, 29, 11, 45)))
      .toBe(11);
  });
});
