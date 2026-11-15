import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisMinute } from 'date-fns/isThisMinute';

@Pipe({
  name: 'dfnsIsThisMinute',
  standalone: true
})
export class IsThisMinutePipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisMinute(date);
  }
}

/**
 * @deprecated Import the standalone `IsThisMinutePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsThisMinutePipe],
  exports: [IsThisMinutePipe]
})
export class IsThisMinutePipeModule {}
