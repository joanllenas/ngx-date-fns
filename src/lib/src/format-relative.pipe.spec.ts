import { FormatRelativePipe } from './format-relative.pipe';
import { nl } from 'date-fns/esm/locale';
import { DateFnsConfigurationService } from './date-fns-configuration.service';

describe('FormatRelativePipe', () => {
  let pipe: FormatRelativePipe;

  beforeEach(() => {
    pipe = new FormatRelativePipe(new DateFnsConfigurationService());
  });

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined, undefined)).toThrowError(
      Error,
      FormatRelativePipe.NO_ARGS_ERROR
    );
  });

  it('should display output correctly', () => {
    expect(
      pipe.transform(
        new Date(2014, 9, 5, 16, 30, 0),
        new Date(2014, 9, 6, 12, 0, 0)
      )
    ).toBe('yesterday at 4:30 PM');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(
      pipe.transform(
        new Date(2014, 9, 5, 16, 30, 0),
        new Date(2014, 9, 6, 12, 0, 0),
        {
          locale: nl,
        }
      )
    ).toBe('gisteren om 16:30');
  });
});
