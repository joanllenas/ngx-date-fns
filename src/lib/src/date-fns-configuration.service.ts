import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

export interface DateFnsConfiguration {
  /**
   * Observable language-aware pipes subscribe to get notified when the locale changes,
   * this is useful when pipes live in an OnPush component.
   */
  localeChanged: Subject<never>;

  /**
   * Returns the default locale used by date-fns
   */
  locale(): Object | undefined;

  /**
   * Sets the default locale used by date-fns
   */
  setLocale(locale: Object | undefined): void;
}

@Injectable()
export class DateFnsConfigurationService implements DateFnsConfiguration {
  public localeChanged: Subject<never> = new Subject();
  private _locale: Object | undefined;

  locale(): Object | undefined {
    return this._locale;
  }

  setLocale(locale: Object | undefined): void {
    this._locale = locale;
    this.localeChanged.next();
  }
}

/**
 * Helper function used by all pipes to calculate locale
 */
export const calculateLocale = (
  options: { locale?: Object | undefined } | undefined,
  config: DateFnsConfiguration
): Object | undefined => {

  const configLocale = config.locale();

  if(!options && configLocale) {
    return {locale: configLocale};
  }

  if(options && !options.locale && configLocale) {
    return {
      ...options,
      locale: configLocale
    };
  }

  return options;
};
