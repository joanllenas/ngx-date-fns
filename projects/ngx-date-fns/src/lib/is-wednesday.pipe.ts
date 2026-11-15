import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isWednesday } from 'date-fns/isWednesday';

@Pipe({
  name: 'dfnsIsWednesday',
  standalone: true
})
export class IsWednesdayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isWednesday(date);
  }
}

/**
 * @deprecated Import the standalone `IsWednesdayPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsWednesdayPipe],
  exports: [IsWednesdayPipe]
})
export class IsWednesdayPipeModule {}
