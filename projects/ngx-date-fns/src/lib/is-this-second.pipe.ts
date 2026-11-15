import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isThisSecond } from 'date-fns/isThisSecond';

@Pipe({
  name: 'dfnsIsThisSecond',
  standalone: true
})
export class IsThisSecondPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isThisSecond(date);
  }
}

/**
 * @deprecated Import the standalone `IsThisSecondPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsThisSecondPipe],
  exports: [IsThisSecondPipe]
})
export class IsThisSecondPipeModule {}
