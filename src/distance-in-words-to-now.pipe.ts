import {Pipe, PipeTransform} from '@angular/core';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

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
