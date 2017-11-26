import {Pipe, PipeTransform} from '@angular/core';
import * as distanceInWords from 'date-fns/distance_in_words';

@Pipe({ name: 'dfnsDistanceInWords' })
export class DistanceInWordsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDistanceInWords: missing required arguments';

  transform(
    dateToCompare: string | number | Date,
    date: string | number | Date,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Object
    }
  ): string {
    if (!dateToCompare || !date) {
        throw new Error(DistanceInWordsPipe.NO_ARGS_ERROR);
    }
    return distanceInWords(dateToCompare, date, options);
  }
}
