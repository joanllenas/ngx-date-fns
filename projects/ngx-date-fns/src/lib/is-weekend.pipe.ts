import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isWeekend } from 'date-fns/isWeekend';

@Pipe({ name: 'dfnsIsWeekend' })
export class IsWeekendPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isWeekend(date);
  }
}

@NgModule({
  declarations: [IsWeekendPipe],
  exports: [IsWeekendPipe]
})
export class IsWeekendPipeModule {}
