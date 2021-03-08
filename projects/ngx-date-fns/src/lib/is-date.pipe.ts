import { NgModule, Pipe, PipeTransform } from '@angular/core';
import isDate from 'date-fns/esm/isDate';

@Pipe({ name: 'dfnsIsDate' })
export class IsDatePipe implements PipeTransform {
  transform(date: any): boolean {
    return isDate(date);
  }
}

@NgModule({
  declarations: [IsDatePipe],
  exports: [IsDatePipe]
})
export class IsDatePipeModule {}
