import { NgModule, Pipe, PipeTransform } from '@angular/core';
import isMatch from 'date-fns/isMatch';

@Pipe({
  name: 'dfnsIsMatch'
})
export class IsMatchPipe implements PipeTransform {

  transform(
    dateString: string,
    formatString: string,
    options?: {
      locale?: Locale | undefined;
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined;
      useAdditionalWeekYearTokens?: boolean | undefined;
      useAdditionalDayOfYearTokens?: boolean | undefined;
    } | undefined
  ): boolean {
    return isMatch(dateString, formatString, options);
  }

}

@NgModule({
  declarations: [IsMatchPipe],
  exports: [IsMatchPipe]
})
export class IsMatchPipeModule { }
