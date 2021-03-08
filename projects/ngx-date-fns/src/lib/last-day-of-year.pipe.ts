import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import lastDayOfYear from 'date-fns/esm/lastDayOfYear';

@Pipe({ name: 'dfnsLastDayOfYear' })
export class LastDayOfYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfYear(date);
  }
}

@NgModule({
  declarations: [LastDayOfYearPipe],
  exports: [LastDayOfYearPipe]
})
export class LastDayOfYearPipeModule {}
