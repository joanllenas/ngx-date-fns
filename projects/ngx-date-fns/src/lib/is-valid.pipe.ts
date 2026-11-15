import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isValid } from 'date-fns/isValid';

@Pipe({ name: 'dfnsIsValid', standalone: true })
export class IsValidPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isValid(date);
  }
}

/**
 * @deprecated Import the standalone `IsValidPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsValidPipe],
  exports: [IsValidPipe]
})
export class IsValidPipeModule {}
