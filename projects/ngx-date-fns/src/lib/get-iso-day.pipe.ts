import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { getISODay } from 'date-fns';

@Pipe({ name: 'dfnsGetISODay' })
export class GetISODayPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetISODay: missing required arguments';

  transform(date: string | number | Date): number {
    if (isInvalidDate(date)) {
      throw new Error(GetISODayPipe.NO_ARGS_ERROR);
    }
    return getISODay(date);
  }
}
