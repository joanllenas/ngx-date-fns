import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getDecade from 'date-fns/getDecade';

@Pipe({ name: 'dfnsGetDecade' })
export class GetDecadePipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDecade(date);
  }
}
