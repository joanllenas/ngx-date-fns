export function isInvalidDate(date: Date | string | number | null | undefined) {
  return date === undefined || date === null || date === '';
}
