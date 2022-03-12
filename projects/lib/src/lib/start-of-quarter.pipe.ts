import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfQuarter from 'date-fns/startOfQuarter';

@Pipe({ name: 'dfnsStartOfQuarter' })
export class StartOfQuarterPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfQuarter(date);
  }
}

@NgModule({
  declarations: [StartOfQuarterPipe],
  exports: [StartOfQuarterPipe]
})
export class StartOfQuarterPipeModule {}
