import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { closestTo } from 'date-fns/closestTo';

@Pipe({ name: 'dfnsClosestTo', standalone: true })
export class ClosestToPipe implements PipeTransform {
  transform(
    dateToCompare: DateFnsInputDate,
    datesArray: DateFnsInputDate[]
  ): ReturnType<typeof closestTo> {
    return closestTo(dateToCompare, datesArray);
  }
}

/**
 * @deprecated Import the standalone `ClosestToPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [ClosestToPipe],
  exports: [ClosestToPipe]
})
export class ClosestToPipeModule {}
