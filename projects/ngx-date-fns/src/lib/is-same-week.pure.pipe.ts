import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';
import isSameWeek from 'date-fns/isSameWeek';

@Pipe({
    name: 'dfnsIsSameWeekPure'
})
export class IsSameWeekPurePipe implements PipeTransform {
    constructor(public config: DateFnsConfigurationService) { }

    transform(
        dateLeft: DateFnsInputDate,
        dateRight: DateFnsInputDate,
        options?: {
            locale?: Locale
            weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        }
    ): boolean {
        return isSameWeek(dateLeft, dateRight, calculateLocale(options, this.config));
    }

}

@NgModule({
    declarations: [IsSameWeekPurePipe],
    exports: [IsSameWeekPurePipe]
})
export class IsSameWeekPurePipeModule { }
