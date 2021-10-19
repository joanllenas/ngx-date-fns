import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
import isMatch from 'date-fns/isMatch';

@Pipe({
    name: 'dfnsIsMatchPure'
})
export class IsMatchPurePipe implements PipeTransform {
    constructor(public config: DateFnsConfigurationService) { }

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
        return isMatch(dateString, formatString, calculateLocale(options, this.config));
    }

}

@NgModule({
    declarations: [IsMatchPurePipe],
    exports: [IsMatchPurePipe]
})
export class IsMatchPurePipeModule { }
