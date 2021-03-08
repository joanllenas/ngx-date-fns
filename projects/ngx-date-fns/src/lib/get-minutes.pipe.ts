import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getMinutes from 'date-fns/esm/getMinutes';

@Pipe({ name: 'dfnsGetMinutes' })
export class GetMinutesPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getMinutes(date);
  }
}

@NgModule({
  declarations: [GetMinutesPipe],
  exports: [GetMinutesPipe]
})
export class GetMinutesPipeModule {}
