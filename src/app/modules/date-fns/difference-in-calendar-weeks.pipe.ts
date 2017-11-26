import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInCalendarWeeksNs from 'date-fns/difference_in_calendar_weeks';
const differenceInCalendarWeeks = differenceInCalendarWeeksNs;

@Pipe({ name: 'dfnsDifferenceInCalendarWeeks' })
export class DifferenceInCalendarWeeksPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInCalendarWeeks: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date,
    options?: {
      weekStartsOn?: number
    }
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInCalendarWeeksPipe.NO_ARGS_ERROR);
    }
    return differenceInCalendarWeeks(dateLeft, dateRight, options);
  }
}
