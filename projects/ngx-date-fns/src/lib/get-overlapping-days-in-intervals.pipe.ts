import { Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getOverlappingDaysInIntervals from 'date-fns/getOverlappingDaysInIntervals';

@Pipe({ name: 'dfnsGetOverlappingDaysInIntervals' })
export class GetOverlappingDaysInIntervalsPipe implements PipeTransform {
  transform(
    intervalLeft: { start: DateFnsInputDate; end: DateFnsInputDate },
    intervalRight: { start: DateFnsInputDate; end: DateFnsInputDate }
  ): number {
    return getOverlappingDaysInIntervals(intervalLeft, intervalRight);
  }
}
