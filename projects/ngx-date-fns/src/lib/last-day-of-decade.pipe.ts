import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import lastDayOfDecade from 'date-fns/esm/lastDayOfDecade';

@Pipe({ name: 'dfnsLastDayOfDecade' })
export class LastDayOfDecadePipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return lastDayOfDecade(date);
  }
}

@NgModule({
  declarations: [LastDayOfDecadePipe],
  exports: [LastDayOfDecadePipe]
})
export class LastDayOfDecadePipeModule {}
