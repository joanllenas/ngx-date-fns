import {Pipe, PipeTransform} from '@angular/core';
import {getSeconds} from 'date-fns';


@Pipe({ name: 'dfnsGetSeconds' })
export class GetSecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetSeconds: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetSecondsPipe.NO_ARGS_ERROR);
    }
    return getSeconds(date);
  }
}
