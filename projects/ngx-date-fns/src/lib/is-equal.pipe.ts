import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
import isEqual from 'date-fns/esm/isEqual';

@Pipe({ name: 'dfnsIsEqual' })
export class IsEqualPipe implements PipeTransform {
  transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean {
    return isEqual(dateLeft, dateRight);
  }
}

@NgModule({
  declarations: [IsEqualPipe],
  exports: [IsEqualPipe]
})
export class IsEqualPipeModule {}
