import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import addMilliseconds from 'date-fns/addMilliseconds';

@Pipe({ name: 'dfnsAddMilliseconds' })
export class AddMillisecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addMilliseconds(date, amount);
  }
}

@NgModule({
  declarations: [AddMillisecondsPipe],
  exports: [AddMillisecondsPipe]
})
export class AddMillisecondsPipeModule {}
