import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isEqual } from 'date-fns/isEqual';

@Pipe({ name: 'dfnsIsEqual', standalone: true })
export class IsEqualPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isEqual(dateLeft, dateRight);
  }
}

/**
 * @deprecated Import the standalone `IsEqualPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsEqualPipe],
  exports: [IsEqualPipe]
})
export class IsEqualPipeModule {}
