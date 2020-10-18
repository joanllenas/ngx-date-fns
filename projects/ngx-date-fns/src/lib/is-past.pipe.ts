import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isPast from 'date-fns/isPast';

@Pipe({ name: 'dfnsIsPast' })
export class IsPastPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isPast(date);
  }
}

@NgModule({
  declarations: [IsPastPipe],
  exports: [IsPastPipe]
})
export class IsPastPipeModule {}
