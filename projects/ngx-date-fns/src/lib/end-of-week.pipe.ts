import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import endOfWeek from 'date-fns/esm/endOfWeek';

@Pipe({ name: 'dfnsEndOfWeek' })
export class EndOfWeekPipe implements PipeTransform {
  transform(
    date: DateFnsInputDate,
    options?: {
      weekStartsOn?: DateFnsWeekIndex;
    }
  ): Date {
    return endOfWeek(date, options);
  }
}

@NgModule({
  declarations: [EndOfWeekPipe],
  exports: [EndOfWeekPipe]
})
export class EndOfWeekPipeModule {}
