import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { isDate } from 'date-fns/isDate';

@Pipe({ name: 'dfnsIsDate', standalone: true })
export class IsDatePipe implements PipeTransform {
  transform(date: any): boolean {
    return isDate(date);
  }
}

/**
 * @deprecated Import the standalone `IsDatePipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsDatePipe],
  exports: [IsDatePipe]
})
export class IsDatePipeModule {}
