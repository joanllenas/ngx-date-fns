import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThursday } from 'date-fns/isThursday';

@Pipe({
  name: 'dfnsIsThursday',
  standalone: true
})
export class IsThursdayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThursday(date);
  }
}

/**
 * @deprecated Import the standalone `IsThursdayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsThursdayPipe],
  exports: [IsThursdayPipe]
})
export class IsThursdayPipeModule {}
