import { isValid } from 'date-fns/isValid';
import { DateFnsInputDate } from './types';

export const isValidDate = (
  date: DateFnsInputDate | null | undefined
): date is Date => !(date === undefined || date === null || !isValid(date));
