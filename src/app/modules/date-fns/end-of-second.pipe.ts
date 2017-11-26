import {Pipe, PipeTransform} from '@angular/core';
import * as endOfSecondNs from 'date-fns/end_of_second';
const endOfSecond = endOfSecondNs;

@Pipe({ name: 'dfnsEndOfSecond' })
export class EndOfSecondPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfSecond: missing required arguments';

  transform(
    date: string | number | Date
  ): Date {
    if (!date) {
        throw new Error(EndOfSecondPipe.NO_ARGS_ERROR);
    }
    return endOfSecond(date);
  }
}
