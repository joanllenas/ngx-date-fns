import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfDay } from 'date-fns/startOfDay';

@Pipe({ name: 'dfnsStartOfDay' })
export class StartOfDayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfDay(date);
  }
}

@NgModule({
  declarations: [StartOfDayPipe],
  exports: [StartOfDayPipe]
})
export class StartOfDayPipeModule {}
