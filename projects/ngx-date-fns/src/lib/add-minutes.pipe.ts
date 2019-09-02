import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import addMinutes from 'date-fns/addMinutes';

@Pipe({ name: 'dfnsAddMinutes' })
export class AddMinutesPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addMinutes(date, amount);
  }
}
