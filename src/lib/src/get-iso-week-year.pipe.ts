import { Pipe, PipeTransform } from '@angular/core';
import { getISOWeekYear } from 'date-fns';

@Pipe({ name: 'dfnsGetISOWeekYear' })
export class GetISOWeekYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsGetISOWeekYear: missing required arguments';

  transform(date: string | number | Date): number {
    if (!date) {
      throw new Error(GetISOWeekYearPipe.NO_ARGS_ERROR);
    }
    return getISOWeekYear(date);
  }
}
