import { Pipe, PipeTransform } from '@angular/core';
import { getISOYear } from 'date-fns';

@Pipe({ name: 'dfnsGetISOYear' })
export class GetISOYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetISOYear: missing required arguments';

  transform(date: string | number | Date): number {
    if (!date) {
      throw new Error(GetISOYearPipe.NO_ARGS_ERROR);
    }
    return getISOYear(date);
  }
}
