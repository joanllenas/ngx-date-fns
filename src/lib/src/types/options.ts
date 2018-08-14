export type Options = {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7,
  additionalDigits?: 0 | 1 | 2,
  locale?: Locale,
  includeSeconds?: boolean,
  addSuffix?: boolean,
  unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year',
  roundingMethod?: 'floor' | 'ceil' | 'round'
};
