import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import closestTo from 'date-fns/closestTo';

@Pipe({ name: 'dfnsClosestTo' })
export class ClosestToPipe implements PipeTransform {
  transform(
    dateToCompare: DateFnsInputDate,
    datesArray: DateFnsInputDate[]
  ): Date {
    return closestTo(dateToCompare, datesArray);
  }
}
