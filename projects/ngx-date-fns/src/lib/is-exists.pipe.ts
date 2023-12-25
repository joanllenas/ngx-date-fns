import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { isExists } from 'date-fns/isExists';

@Pipe({
  name: 'dfnsIsExists'
})
export class IsExistsPipe implements PipeTransform {
  transform(year: number, month: number, day: number): boolean {
    return isExists(year, month, day);
  }
}

@NgModule({
  declarations: [IsExistsPipe],
  exports: [IsExistsPipe]
})
export class IsExistsPipeModule {}
