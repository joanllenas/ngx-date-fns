import {Pipe, PipeTransform} from '@angular/core';
import {addSeconds} from 'date-fns';


@Pipe({ name: 'dfnsAddSeconds' })
export class AddSecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddSeconds: missing required arguments';

  transform(
    date: (Date | string | number),
    amount: number
  ): Date {
    if (!date) {
        throw new Error(AddSecondsPipe.NO_ARGS_ERROR);
    }
    return addSeconds(date, amount || 0);
  }
}
