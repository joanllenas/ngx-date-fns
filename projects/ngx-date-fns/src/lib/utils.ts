import { isValid } from 'date-fns/isValid';
import { DateFnsInputDate } from './types';

export const isValidDate = (
  date: DateFnsInputDate | null | undefined
): date is Date => {
  if (date === undefined || date === null) {
    return false;
  }
  if (typeof date === 'string' && date.length > 0) {
    return true;
  }
  return isValid(date);
};
