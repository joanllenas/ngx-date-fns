import isValid from 'date-fns/isValid';
import { DateFnsInputDate } from './types';

export const isInvalidDate = (date: DateFnsInputDate) =>
  date === undefined || date === null || !isValid(date);
