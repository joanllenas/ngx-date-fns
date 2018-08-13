import { Pipe, PipeTransform } from '@angular/core';
import { getOverlappingDaysInIntervals } from 'date-fns';

@Pipe({ name: 'dfnsGetOverlappingDaysInRanges' })
export class GetOverlappingDaysInIntervalsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsGetOverlappingDaysInRanges: missing required arguments';

  transform(initialInterval: Interval, comparedInterval: Interval): number {
    if (!initialInterval || !comparedInterval) {
      throw new Error(GetOverlappingDaysInIntervalsPipe.NO_ARGS_ERROR);
    }
    return getOverlappingDaysInIntervals(initialInterval, comparedInterval);
  }
}
