import { Pipe, PipeTransform } from '@angular/core';
import { getISOWeek } from 'date-fns';

@Pipe({ name: 'dfnsGetISOWeek' })
export class GetISOWeekPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetISOWeek: missing required arguments';

  transform(date: string | number | Date): number {
    if (!date) {
      throw new Error(GetISOWeekPipe.NO_ARGS_ERROR);
    }
    return getISOWeek(date);
  }
}
