import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import { isTomorrow } from 'date-fns/isTomorrow';

@Pipe({
  name: 'dfnsIsTomorrow'
})
export class IsTomorrowPipe implements PipeTransform {
  transform(date: DateFnsInputDate): boolean {
    return isTomorrow(date);
  }
}

@NgModule({
  declarations: [IsTomorrowPipe],
  exports: [IsTomorrowPipe]
})
export class IsTomorrowPipeModule {}
