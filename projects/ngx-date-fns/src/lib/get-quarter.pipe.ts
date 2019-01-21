import { Pipe, PipeTransform } from '@angular/core';
import { getQuarter } from 'date-fns';

@Pipe({ name: 'dfnsGetQuarter' })
export class GetQuarterPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetQuarter: missing required arguments';

  transform(date: string | number | Date): number {
    if (!date) {
      throw new Error(GetQuarterPipe.NO_ARGS_ERROR);
    }
    return getQuarter(date);
  }
}
