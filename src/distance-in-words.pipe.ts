import {Pipe, PipeTransform} from '@angular/core';
import {distanceInWords} from 'date-fns';

@Pipe({ name: 'dfnsDistanceInWords' })
export class DistanceInWordsPipe implements PipeTransform {
    transform(dateToCompare: Date, date: Date, options?: any): string {
      const argsOk = [dateToCompare, date].every(arg => !!arg);
        if (!argsOk) {
            throw new Error('DistanceInWordsPipe: missing required arguments');
        }
        return distanceInWords(dateToCompare, date, options);
    }
}
