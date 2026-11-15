import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { closestTo } from 'date-fns/closestTo';

@Pipe({ name: 'dfnsClosestTo' })
export class ClosestToPipe implements PipeTransform {
  transform(
    dateToCompare: DateFnsInputDate,
    datesArray: DateFnsInputDate[]
  ): ReturnType<typeof closestTo> {
    return closestTo(dateToCompare, datesArray);
  }
}
