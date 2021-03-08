import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import en from 'date-fns/esm/locale/en-US';
type Locale = typeof en;

export interface DateFnsConfiguration {
  /**
   * Observable language-aware pipes subscribe to get notified when the locale changes,
   * this is useful when pipes live in an OnPush component.
   */
  localeChanged: Subject<never>;

  /**
   * Returns the default locale used by date-fns
   */
  locale(): Locale | undefined;

  /**
   * Sets the default locale used by date-fns
   */
  setLocale(locale: Locale | undefined): void;
}

@Injectable({ providedIn: 'root' })
export class DateFnsConfigurationService implements DateFnsConfiguration {
  public localeChanged: Subject<never> = new Subject();
  private locale$: Locale | undefined;

  locale(): Locale | undefined {
    return this.locale$;
  }

  setLocale(locale: Locale | undefined): void {
    this.locale$ = locale;
    this.localeChanged.next();
  }
}

/**
 * Helper function used by all pipes to calculate locale
 */
export const calculateLocale = (
  options: { locale?: Locale } | undefined,
  config: DateFnsConfiguration
): { locale?: Locale } | undefined => {
  const configLocale = config.locale();

  if (!options && configLocale) {
    return { locale: configLocale };
  }

  if (options && !options.locale && configLocale) {
    return {
      ...options,
      locale: configLocale
    };
  }

  return options;
};
