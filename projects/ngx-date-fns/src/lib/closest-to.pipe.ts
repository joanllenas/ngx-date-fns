import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import closestTo from 'date-fns/esm/closestTo';

@Pipe({ name: 'dfnsClosestTo' })
export class ClosestToPipe implements PipeTransform {
  transform(
    dateToCompare: DateFnsInputDate,
    datesArray: DateFnsInputDate[]
  ): Date {
    return closestTo(dateToCompare, datesArray);
  }
}

@NgModule({
  declarations: [ClosestToPipe],
  exports: [ClosestToPipe]
})
export class ClosestToPipeModule {}
