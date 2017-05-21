import { NgModule } from '@angular/core';

import { DistanceInWordsPipe } from './distance-in-words.pipe';
import { DistanceInWordsStrictPipe } from './distance-in-words-strict.pipe';
import { DistanceInWordsToNowPipe } from './distance-in-words-to-now.pipe';
import { FormatPipe } from './format.pipe';
import { GetOverlappingDaysInRangesPipe } from './get-overlapping-days-in-ranges.pipe';
import { GetMillisecondsPipe } from './get-milliseconds.pipe';
import { GetSecondsPipe } from './get-seconds.pipe';
import { GetMinutesPipe } from './get-minutes.pipe';
import { GetHoursPipe } from './get-hours.pipe';
import { GetDatePipe } from './get-date.pipe';
import { GetDayOfYearPipe } from './get-day-of-year.pipe';
import { GetDayPipe } from './get-day.pipe';
import { GetISODayPipe } from './get-iso-day.pipe';
import { GetDaysInMonthPipe } from './get-days-in-month.pipe';
import { GetMonthPipe } from './get-month.pipe';
import { GetDaysInYearPipe } from './get-days-in-year.pipe';
import { GetYearPipe } from './get-year.pipe';
import { GetISOWeeksInYearPipe } from './get-iso-weeks-in-year.pipe';

const PIPES = [
  DistanceInWordsPipe,
  DistanceInWordsStrictPipe,
  DistanceInWordsToNowPipe,
  FormatPipe,
  GetOverlappingDaysInRangesPipe,
  GetMillisecondsPipe,

  GetSecondsPipe,
  GetMinutesPipe,
  GetHoursPipe,
  GetDatePipe,
  GetDayOfYearPipe,
  GetDayPipe,
  GetISODayPipe,
  GetDaysInMonthPipe,
  GetMonthPipe,
  GetDaysInYearPipe,
  GetYearPipe,
  GetISOWeeksInYearPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class DateFnsModule { }
