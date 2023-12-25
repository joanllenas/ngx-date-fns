import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isSunday } from 'date-fns/isSunday';

@Pipe({
  name: 'dfnsIsSunday'
})
export class IsSundayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isSunday(date);
  }
}

@NgModule({
  declarations: [IsSundayPipe],
  exports: [IsSundayPipe]
})
export class IsSundayPipeModule {}
