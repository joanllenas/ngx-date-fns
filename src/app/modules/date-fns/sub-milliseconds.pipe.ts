import {Pipe, PipeTransform} from '@angular/core';
import * as subMilliseconds from 'date-fns/sub_milliseconds';

@Pipe({ name: 'dfnsSubMilliseconds' })
export class SubMillisecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubMilliseconds: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(SubMillisecondsPipe.NO_ARGS_ERROR);
    }
    return subMilliseconds(date, amount || 0);
  }
}
