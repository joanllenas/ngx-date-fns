import {Pipe, PipeTransform} from '@angular/core';
import {distanceInWordsToNow} from 'date-fns';


@Pipe({ name: 'dfnsDistanceInWordsToNow' })
export class DistanceInWordsToNowPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDistanceInWordsToNow: missing required arguments';

  transform(
    date: string | number | Date,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Object
    }
  ): string {
    if (!date) {
        throw new Error(DistanceInWordsToNowPipe.NO_ARGS_ERROR);
    }
    return distanceInWordsToNow(date, options);
  }
}
