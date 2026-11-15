import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisHour } from 'date-fns/isThisHour';

@Pipe({
  name: 'dfnsIsThisHour',
  standalone: true
})
export class IsThisHourPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisHour(date);
  }
}

/**
 * @deprecated Import the standalone `IsThisHourPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsThisHourPipe],
  exports: [IsThisHourPipe]
})
export class IsThisHourPipeModule {}
