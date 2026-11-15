import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisQuarter } from 'date-fns/isThisQuarter';

@Pipe({
  name: 'dfnsIsThisQuarter',
  standalone: true
})
export class IsThisQuarterPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisQuarter(date);
  }
}

/**
 * @deprecated Import the standalone `IsThisQuarterPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsThisQuarterPipe],
  exports: [IsThisQuarterPipe]
})
export class IsThisQuarterPipeModule {}
