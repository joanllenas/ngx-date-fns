import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';
import isThisWeek from 'date-fns/isThisWeek';

@Pipe({
    name: 'dfnsIsThisWeekPure'
})
export class IsThisWeekPurePipe implements PipeTransform {
    constructor(public config: DateFnsConfigurationService) { }

    transform(
        date: DateFnsInputDate,
        options?: {
            locale?: Locale
            weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        }
    ): boolean {
        return isThisWeek(date, calculateLocale(options, this.config));
    }

}

@NgModule({
    declarations: [IsThisWeekPurePipe],
    exports: [IsThisWeekPurePipe]
})
export class IsThisWeekPurePipeModule { }
