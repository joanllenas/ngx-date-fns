import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import min from 'date-fns/esm/min';

@Pipe({ name: 'dfnsMin' })
export class MinPipe implements PipeTransform {
  transform(dates: DateFnsInputDate[]): Date {
    return min(dates);
  }
}

@NgModule({
  declarations: [MinPipe],
  exports: [MinPipe]
})
export class MinPipeModule {}
