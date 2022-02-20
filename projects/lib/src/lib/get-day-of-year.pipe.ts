import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getDayOfYear from 'date-fns/getDayOfYear';

@Pipe({ name: 'dfnsGetDayOfYear' })
export class GetDayOfYearPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDayOfYear(date);
  }
}

@NgModule({
  declarations: [GetDayOfYearPipe],
  exports: [GetDayOfYearPipe]
})
export class GetDayOfYearPipeModule {}
