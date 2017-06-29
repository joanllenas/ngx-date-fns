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
import { GetISOWeekPipe } from './get-iso-week.pipe';
import { MinPipe } from './min.pipe';
import { MaxPipe } from './max.pipe';
import { GetTimePipe } from './get-time.pipe';
import { ClosestToPipe } from './closest-to.pipe';
import { DifferenceInMillisecondsPipe } from './difference-in-milliseconds.pipe';
import { DifferenceInSecondsPipe } from './difference-in-seconds.pipe';
import { DifferenceInMinutesPipe } from './difference-in-minutes.pipe';
import { DifferenceInHoursPipe } from './difference-in-hours.pipe';
import { DifferenceInCalendarDaysPipe } from './difference-in-calendar-days.pipe';
import { DifferenceInDaysPipe } from './difference-in-days.pipe';
import { DifferenceInCalendarWeeksPipe } from './difference-in-calendar-weeks.pipe';
import { DifferenceInWeeksPipe } from './difference-in-weeks.pipe';
import { DifferenceInCalendarISOWeeksPipe } from './difference-in-calendar-iso-weeks.pipe';
import { DifferenceInCalendarMonthsPipe } from './difference-in-calendar-months.pipe';
import { AddMillisecondsPipe } from './add-milliseconds.pipe';
import { AddSecondsPipe } from './add-seconds.pipe';
import { AddMinutesPipe } from './add-minutes.pipe';
import { AddHoursPipe } from './add-hours.pipe';
import { AddDaysPipe } from './add-days.pipe';
import { AddWeeksPipe } from './add-weeks.pipe';
import { AddMonthsPipe } from './add-months.pipe';
import { AddQuartersPipe } from './add-quarters.pipe';
import { AddYearsPipe } from './add-years.pipe';
import { AddISOYearsPipe } from './add-iso-years.pipe';
import { SubMillisecondsPipe } from './sub-milliseconds.pipe';
import { SubSecondsPipe } from './sub-seconds.pipe';
import { SubMinutesPipe } from './sub-minutes.pipe';
import { SubHoursPipe } from './sub-hours.pipe';
import { SubDaysPipe } from './sub-days.pipe';
import { SubWeeksPipe } from './sub-weeks.pipe';
import { SubMonthsPipe } from './sub-months.pipe';
import { SubQuartersPipe } from './sub-quarters.pipe';
import { SubYearsPipe } from './sub-years.pipe';
import { SubISOYearsPipe } from './sub-iso-years.pipe';

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
  GetISOWeeksInYearPipe,
  GetISOWeekPipe,
  MinPipe,
  MaxPipe,
  GetTimePipe,
  ClosestToPipe,
  DifferenceInMillisecondsPipe,
  DifferenceInSecondsPipe,
  DifferenceInMinutesPipe,
  DifferenceInHoursPipe,
  DifferenceInCalendarDaysPipe,
  DifferenceInDaysPipe,
  DifferenceInCalendarWeeksPipe,
  DifferenceInWeeksPipe,
  DifferenceInCalendarISOWeeksPipe,
  DifferenceInCalendarMonthsPipe,
  AddMillisecondsPipe,
  AddSecondsPipe,
  AddMinutesPipe,
  AddHoursPipe,
  AddDaysPipe,
  AddWeeksPipe,
  AddMonthsPipe,
  AddQuartersPipe,
  AddYearsPipe,
  AddISOYearsPipe,
  SubMillisecondsPipe,
  SubSecondsPipe,
  SubMinutesPipe,
  SubHoursPipe,
  SubDaysPipe,
  SubWeeksPipe,
  SubMonthsPipe,
  SubQuartersPipe,
  SubYearsPipe,
  SubISOYearsPipe,
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class DateFnsModule { }
