import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { max } from 'date-fns/max';

@Pipe({ name: 'dfnsMax' })
export class MaxPipe implements PipeTransform {
  transform(dates: DateFnsInputDate[]): Date {
    return max(dates);
  }
}

@NgModule({
  declarations: [MaxPipe],
  exports: [MaxPipe]
})
export class MaxPipeModule {}
