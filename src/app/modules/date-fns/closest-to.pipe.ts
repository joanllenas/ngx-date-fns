import {Pipe, PipeTransform} from '@angular/core';
import * as closestToNs from 'date-fns/closest_to';
const closestTo = closestToNs;

@Pipe({ name: 'dfnsClosestTo' })
export class ClosestToPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsClosestTo: You have to provide at least two dates and a date to compare';

  transform(
    dateToCompare: string | number | Date,
    datesArray: (string | number | Date)[]
  ): Date {
    if (!dateToCompare || !datesArray || !Array.isArray(datesArray) || datesArray.length < 2 ) {
        throw new Error(ClosestToPipe.NO_ARGS_ERROR);
    }
    return closestTo(dateToCompare, datesArray);
  }
}
