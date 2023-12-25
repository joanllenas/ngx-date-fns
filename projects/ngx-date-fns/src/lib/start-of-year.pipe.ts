import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { startOfYear } from 'date-fns/startOfYear';

@Pipe({ name: 'dfnsStartOfYear' })
export class StartOfYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfYear(date);
  }
}

@NgModule({
  declarations: [StartOfYearPipe],
  exports: [StartOfYearPipe]
})
export class StartOfYearPipeModule {}
