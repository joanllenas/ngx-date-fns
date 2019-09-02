import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getMinutes from 'date-fns/getMinutes';

@Pipe({ name: 'dfnsGetMinutes' })
export class GetMinutesPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getMinutes(date);
  }
}
