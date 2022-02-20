import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getTime from 'date-fns/getTime';

@Pipe({ name: 'dfnsGetTime' })
export class GetTimePipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getTime(date);
  }
}

@NgModule({
  declarations: [GetTimePipe],
  exports: [GetTimePipe]
})
export class GetTimePipeModule {}
