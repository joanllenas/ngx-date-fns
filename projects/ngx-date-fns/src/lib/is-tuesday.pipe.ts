import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isTuesday } from 'date-fns/isTuesday';

@Pipe({
  name: 'dfnsIsTuesday'
})
export class IsTuesdayPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isTuesday(date);
  }
}

@NgModule({
  declarations: [IsTuesdayPipe],
  exports: [IsTuesdayPipe]
})
export class IsTuesdayPipeModule {}
