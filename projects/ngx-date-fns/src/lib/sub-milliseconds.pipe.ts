import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import subMilliseconds from 'date-fns/subMilliseconds';

@Pipe({ name: 'dfnsSubMilliseconds' })
export class SubMillisecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return subMilliseconds(date, amount);
  }
}

@NgModule({
  declarations: [SubMillisecondsPipe],
  exports: [SubMillisecondsPipe]
})
export class SubMillisecondsPipeModule {}
