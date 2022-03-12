import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isFuture from 'date-fns/isFuture';

@Pipe({ name: 'dfnsIsFuture' })
export class IsFuturePipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isFuture(date);
  }
}

@NgModule({
  declarations: [IsFuturePipe],
  exports: [IsFuturePipe]
})
export class IsFuturePipeModule {}
