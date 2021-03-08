import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getMonth from 'date-fns/esm/getMonth';

@Pipe({ name: 'dfnsGetMonth' })
export class GetMonthPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getMonth(date);
  }
}

@NgModule({
  declarations: [GetMonthPipe],
  exports: [GetMonthPipe]
})
export class GetMonthPipeModule {}
