import { Injectable } from '@angular/core';

export interface DateFnsConfiguration {
  /**
   * Returns the default locale used by date-fns
   */
  locale(): Object;

  /**
   * Sets the default locale used by date-fns
   */
  setLocale(locale: Object): void;
}

@Injectable()
export class DateFnsConfigurationService implements DateFnsConfiguration {
  private _locale: Object;

  locale(): Object {
    return this._locale;
  }

  setLocale(locale: Object): void {
    this._locale = locale;
  }
}

/**
 * Helper function used by all pipes to calculate locale
 */
export const calculateLocale = (
  options: { locale?: Object },
  config: DateFnsConfiguration
): Object => {
  const configLocale = config.locale();

  if (!options && configLocale) {
    return { locale: configLocale };
  }

  if (options && !options.locale && configLocale) {
    return {
      ...options,
      locale: configLocale,
    };
  }

  return options;
};
