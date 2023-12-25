import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSaturday } from 'date-fns/isSaturday';

@Pipe({
  name: 'dfnsIsSaturday'
})
export class IsSaturdayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isSaturday(date);
  }
}

@NgModule({
  declarations: [IsSaturdayPipe],
  exports: [IsSaturdayPipe]
})
export class IsSaturdayPipeModule {}
