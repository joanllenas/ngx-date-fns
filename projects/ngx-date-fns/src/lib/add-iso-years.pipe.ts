import { Pipe, PipeTransform } from '@angular/core';
import { addISOYears } from 'date-fns';

@Pipe({ name: 'dfnsAddISOYears' })
export class AddISOYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddISOYears: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (!date) {
      throw new Error(AddISOYearsPipe.NO_ARGS_ERROR);
    }
    return addISOYears(date, amount || 0);
  }
}
