import { FormatDistanceStrictPipe } from './format-distance-strict.pipe';
import * as esLocale from 'date-fns/locale/es/index.js';
import { DateFnsConfigurationService } from './date-fns-configuration.service';

describe('FormatDistanceStrictPipe', () => {
  let pipe: FormatDistanceStrictPipe;

  beforeEach(() =>
    (pipe = new FormatDistanceStrictPipe(new DateFnsConfigurationService())));

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined, undefined)).toThrowError(
      Error,
      FormatDistanceStrictPipe.NO_ARGS_ERROR
    );
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 6, 2), new Date(2015, 0, 2))).toBe(
      '6 months'
    );
    expect(
      pipe.transform(
        new Date(2015, 0, 1, 0, 0, 0),
        new Date(2015, 0, 1, 0, 0, 15)
      )
    ).toBe('15 seconds');
  });

  it('should display output correctly when providing "addSuffix"', () => {
    expect(
      pipe.transform(new Date(2015, 0, 1), new Date(2016, 0, 1), {
        addSuffix: true,
      })
    ).toBe('1 year ago');
  });

  it('should display output correctly when providing "unit"', () => {
    expect(
      pipe.transform(new Date(2015, 0, 1), new Date(2016, 0, 1), {
        unit: 'minute',
      })
    ).toBe('525600 minutes');
  });

  it('should display output correctly when providing "unit" and "partialMethod"', () => {
    expect(
      pipe.transform(new Date(2015, 0, 1), new Date(2015, 0, 28), {
        unit: 'month',
        roundingMethod: 'ceil',
      })
    ).toBe('1 month');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(
      pipe.transform(new Date(2015, 0, 1), new Date(2016, 0, 1), {
        locale: esLocale,
      })
    ).toBe('1 año');
  });
});
