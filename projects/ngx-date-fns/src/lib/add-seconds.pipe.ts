import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { addSeconds } from 'date-fns/addSeconds';

@Pipe({ name: 'dfnsAddSeconds' })
export class AddSecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate, amount: number): Date {
    return addSeconds(date, amount);
  }
}

@NgModule({
  declarations: [AddSecondsPipe],
  exports: [AddSecondsPipe]
})
export class AddSecondsPipeModule {}
