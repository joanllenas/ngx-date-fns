import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getSeconds from 'date-fns/getSeconds';

@Pipe({ name: 'dfnsGetSeconds' })
export class GetSecondsPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getSeconds(date);
  }
}

@NgModule({
  declarations: [GetSecondsPipe],
  exports: [GetSecondsPipe]
})
export class GetSecondsPipeModule {}
