import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import endOfMonth from 'date-fns/endOfMonth';

@Pipe({ name: 'dfnsEndOfMonth' })
export class EndOfMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return endOfMonth(date);
  }
}

@NgModule({
  declarations: [EndOfMonthPipe],
  exports: [EndOfMonthPipe]
})
export class EndOfMonthPipeModule {}
