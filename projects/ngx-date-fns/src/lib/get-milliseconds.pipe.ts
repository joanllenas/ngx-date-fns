import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { getMilliseconds } from 'date-fns/getMilliseconds';

@Pipe({ name: 'dfnsGetMilliseconds' })
export class GetMillisecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getMilliseconds(date);
  }
}

@NgModule({
  declarations: [GetMillisecondsPipe],
  exports: [GetMillisecondsPipe]
})
export class GetMillisecondsPipeModule {}
