import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfDecade from 'date-fns/startOfDecade';

@Pipe({ name: 'dfnsStartOfDecade' })
export class StartOfDecadePipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfDecade(date);
  }
}
