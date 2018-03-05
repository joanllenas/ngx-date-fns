import {Pipe, PipeTransform} from '@angular/core';
import * as distanceInWordsStrictNs from 'date-fns/distance_in_words_strict';
const distanceInWordsStrict = distanceInWordsStrictNs;

@Pipe({ name: 'dfnsDistanceInWordsStrict' })
export class DistanceInWordsStrictPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDistanceInWordsStrict: missing required arguments';

  transform(
    dateToCompare: string | number | Date,
    date: string | number | Date,
    options?: {
      addSuffix?: boolean,
      unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
      partialMethod?: 'floor' | 'ceil' | 'round',
      locale?: Object
    }
  ): string {
    if (!dateToCompare || !date) {
        throw new Error(DistanceInWordsStrictPipe.NO_ARGS_ERROR);
    }
    return distanceInWordsStrict(dateToCompare, date, options);
  }
}
