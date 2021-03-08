import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import startOfDecade from 'date-fns/esm/startOfDecade';

@Pipe({ name: 'dfnsStartOfDecade' })
export class StartOfDecadePipe implements PipeTransform {
  transform(date: DateFnsInputDate): Date {
    return startOfDecade(date);
  }
}

@NgModule({
  declarations: [StartOfDecadePipe],
  exports: [StartOfDecadePipe]
})
export class StartOfDecadePipeModule {}
