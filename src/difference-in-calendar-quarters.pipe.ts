import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInCalendarQuarters from 'date-fns/difference_in_calendar_quarters';

@Pipe({ name: 'dfnsDifferenceInCalendarQuarters' })
export class DifferenceInCalendarQuartersPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInCalendarQuarters: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInCalendarQuartersPipe.NO_ARGS_ERROR);
    }
    return differenceInCalendarQuarters(dateLeft, dateRight);
  }
}
