import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getOverlappingDaysInIntervals } from 'date-fns/getOverlappingDaysInIntervals';

@Pipe({ name: 'dfnsGetOverlappingDaysInIntervals', standalone: true })
export class GetOverlappingDaysInIntervalsPipe implements PipeTransform {
  transform(
    intervalLeft: { start: DateFnsInputDate; end: DateFnsInputDate },
    intervalRight: { start: DateFnsInputDate; end: DateFnsInputDate }
  ): number {
    return getOverlappingDaysInIntervals(intervalLeft, intervalRight);
  }
}

/**
 * @deprecated Import the standalone `GetOverlappingDaysInIntervalsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [GetOverlappingDaysInIntervalsPipe],
  exports: [GetOverlappingDaysInIntervalsPipe]
})
export class GetOverlappingDaysInIntervalsPipeModule {}
