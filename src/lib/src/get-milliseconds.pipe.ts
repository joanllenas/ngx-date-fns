import {Pipe, PipeTransform} from '@angular/core';
import {getMilliseconds} from 'date-fns';


@Pipe({ name: 'dfnsGetMilliseconds' })
export class GetMillisecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetMilliseconds: missing required arguments';

  transform(
    date: string | number | Date
  ): number {
    if (!date) {
        throw new Error(GetMillisecondsPipe.NO_ARGS_ERROR);
    }
    return getMilliseconds(date);
  }
}
