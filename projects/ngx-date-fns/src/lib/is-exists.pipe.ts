import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { isExists } from 'date-fns/isExists';

@Pipe({
  name: 'dfnsIsExists',
  standalone: true
})
export class IsExistsPipe implements PipeTransform {
  transform(year: number, month: number, day: number): boolean {
    return isExists(year, month, day);
  }
}

/**
 * @deprecated Import the standalone `IsExistsPipe` instead.
 * This module will be removed in ngx-date-fns v13.
 */
@NgModule({
  imports: [IsExistsPipe],
  exports: [IsExistsPipe]
})
export class IsExistsPipeModule {}
