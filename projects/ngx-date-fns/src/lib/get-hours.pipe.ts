import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import getHours from 'date-fns/esm/getHours';

@Pipe({ name: 'dfnsGetHours' })
export class GetHoursPipe implements PipeTransform {
  transform(date: DateFnsInputDate): number {
    return getHours(date);
  }
}

@NgModule({
  declarations: [GetHoursPipe],
  exports: [GetHoursPipe]
})
export class GetHoursPipeModule {}
