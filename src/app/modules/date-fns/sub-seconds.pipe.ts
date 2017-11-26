import {Pipe, PipeTransform} from '@angular/core';
import * as subSecondsNs from 'date-fns/sub_seconds';
const subSeconds = subSecondsNs;

@Pipe({ name: 'dfnsSubSeconds' })
export class SubSecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubSeconds: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(SubSecondsPipe.NO_ARGS_ERROR);
    }
    return subSeconds(date, amount || 0);
  }
}
