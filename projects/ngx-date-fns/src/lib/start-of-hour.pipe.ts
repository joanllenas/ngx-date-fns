import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfHour from 'date-fns/startOfHour';

@Pipe({ name: 'dfnsStartOfHour' })
export class StartOfHourPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfHour(date);
  }
}

@NgModule({
  declarations: [StartOfHourPipe],
  exports: [StartOfHourPipe]
})
export class StartOfHourPipeModule {}
