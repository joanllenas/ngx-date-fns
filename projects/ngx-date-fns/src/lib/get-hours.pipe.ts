import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { getHours } from 'date-fns';

@Pipe({ name: 'dfnsGetHours' })
export class GetHoursPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetHours: missing required arguments';

  transform(date: string | number | Date): number {
    if (isInvalidDate(date)) {
      throw new Error(GetHoursPipe.NO_ARGS_ERROR);
    }
    return getHours(date);
  }
}
