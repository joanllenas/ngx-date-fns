import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getDate from 'date-fns/esm/getDate';

@Pipe({ name: 'dfnsGetDate' })
export class GetDatePipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getDate(date);
  }
}

@NgModule({
  declarations: [GetDatePipe],
  exports: [GetDatePipe]
})
export class GetDatePipeModule {}
