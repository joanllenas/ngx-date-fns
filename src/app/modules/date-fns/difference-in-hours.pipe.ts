import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInHoursNs from 'date-fns/difference_in_hours';
const differenceInHours = differenceInHoursNs;

@Pipe({ name: 'dfnsDifferenceInHours' })
export class DifferenceInHoursPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInHours: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInHoursPipe.NO_ARGS_ERROR);
    }
    return differenceInHours(dateLeft, dateRight);
  }
}