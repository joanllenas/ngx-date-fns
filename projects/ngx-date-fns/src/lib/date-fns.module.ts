import { NgModule, ModuleWithProviders } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
// Pipe Modules
import { AddBusinessDaysPipeModule } from './add-business-days.pipe';
import { AddDaysPipeModule } from './add-days.pipe';
import { AddHoursPipeModule } from './add-hours.pipe';
import { AddISOWeekYearsPipeModule } from './add-iso-week-years.pipe';
import { AddMillisecondsPipeModule } from './add-milliseconds.pipe';
import { AddMinutesPipeModule } from './add-minutes.pipe';
import { AddMonthsPipeModule } from './add-months.pipe';
import { AddQuartersPipeModule } from './add-quarters.pipe';
import { AddSecondsPipeModule } from './add-seconds.pipe';
import { AddWeeksPipeModule } from './add-weeks.pipe';
import { AddYearsPipeModule } from './add-years.pipe';
import { ClosestToPipeModule } from './closest-to.pipe';
import { FormatPipeModule } from './format.pipe';
import { FormatRelativePipeModule } from './format-relative.pipe';
import { FormatPurePipeModule } from './format.pure.pipe';
import { FormatRelativePurePipeModule } from './format-relative.pure.pipe';
import { FormatDistancePurePipeModule } from './format-distance.pure.pipe';
import { FormatDistanceStrictPurePipeModule } from './format-distance-strict.pure.pipe';
import { FormatDistanceToNowPurePipeModule } from './format-distance-to-now.pure.pipe';
import { FormatDistanceToNowStrictPurePipeModule } from './format-distance-to-now-strict.pure.pipe';
import { DifferenceInCalendarDaysPipeModule } from './difference-in-calendar-days.pipe';
import { DifferenceInCalendarISOWeeksPipeModule } from './difference-in-calendar-iso-weeks.pipe';
import { DifferenceInCalendarISOWeekYearsPipeModule } from './difference-in-calendar-iso-week-years.pipe';
import { DifferenceInCalendarMonthsPipeModule } from './difference-in-calendar-months.pipe';
import { DifferenceInCalendarQuartersPipeModule } from './difference-in-calendar-quarters.pipe';
import { DifferenceInCalendarWeeksPipeModule } from './difference-in-calendar-weeks.pipe';
import { DifferenceInCalendarYearsPipeModule } from './difference-in-calendar-years.pipe';
import { DifferenceInDaysPipeModule } from './difference-in-days.pipe';
import { DifferenceInHoursPipeModule } from './difference-in-hours.pipe';
import { DifferenceInISOWeekYearsPipeModule } from './difference-in-iso-week-years.pipe';
import { DifferenceInMillisecondsPipeModule } from './difference-in-milliseconds.pipe';
import { DifferenceInMinutesPipeModule } from './difference-in-minutes.pipe';
import { DifferenceInMonthsPipeModule } from './difference-in-months.pipe';
import { DifferenceInQuartersPipeModule } from './difference-in-quarters.pipe';
import { DifferenceInSecondsPipeModule } from './difference-in-seconds.pipe';
import { DifferenceInWeeksPipeModule } from './difference-in-weeks.pipe';
import { DifferenceInYearsPipeModule } from './difference-in-years.pipe';
import { DifferenceInBusinessDaysPipeModule } from './difference-in-business-days.pipe';
import { FormatDistancePipeModule } from './format-distance.pipe';
import { FormatDistanceStrictPipeModule } from './format-distance-strict.pipe';
import { FormatDistanceToNowPipeModule } from './format-distance-to-now.pipe';
import { FormatDistanceToNowStrictPipeModule } from './format-distance-to-now-strict.pipe';
import { EndOfDayPipeModule } from './end-of-day.pipe';
import { EndOfHourPipeModule } from './end-of-hour.pipe';
import { EndOfISOWeekPipeModule } from './end-of-iso-week.pipe';
import { EndOfISOWeekYearPipeModule } from './end-of-iso-week-year.pipe';
import { EndOfMinutePipeModule } from './end-of-minute.pipe';
import { EndOfMonthPipeModule } from './end-of-month.pipe';
import { EndOfQuarterPipeModule } from './end-of-quarter.pipe';
import { EndOfSecondPipeModule } from './end-of-second.pipe';
import { EndOfTodayPipeModule } from './end-of-today.pipe';
import { EndOfTomorrowPipeModule } from './end-of-tomorrow.pipe';
import { EndOfWeekPipeModule } from './end-of-week.pipe';
import { EndOfYearPipeModule } from './end-of-year.pipe';
import { EndOfYesterdayPipeModule } from './end-of-yesterday.pipe';
import { GetDatePipeModule } from './get-date.pipe';
import { GetDayOfYearPipeModule } from './get-day-of-year.pipe';
import { GetDayPipeModule } from './get-day.pipe';
import { GetDaysInMonthPipeModule } from './get-days-in-month.pipe';
import { GetDaysInYearPipeModule } from './get-days-in-year.pipe';
import { GetHoursPipeModule } from './get-hours.pipe';
import { GetISODayPipeModule } from './get-iso-day.pipe';
import { GetISOWeekPipeModule } from './get-iso-week.pipe';
import { GetISOWeeksInYearPipeModule } from './get-iso-weeks-in-year.pipe';
import { GetISOWeekYearPipeModule } from './get-iso-week-year.pipe';
import { GetMillisecondsPipeModule } from './get-milliseconds.pipe';
import { GetMinutesPipeModule } from './get-minutes.pipe';
import { GetMonthPipeModule } from './get-month.pipe';
import { GetOverlappingDaysInIntervalsPipeModule } from './get-overlapping-days-in-intervals.pipe';
import { GetQuarterPipeModule } from './get-quarter.pipe';
import { GetSecondsPipeModule } from './get-seconds.pipe';
import { GetTimePipeModule } from './get-time.pipe';
import { GetYearPipeModule } from './get-year.pipe';
import { GetUnixTimePipeModule } from './get-unix-time.pipe';
import { GetWeekPipeModule } from './get-week.pipe';
import { GetWeekOfMonthPipeModule } from './get-week-of-month.pipe';
import { GetWeeksInMonthPipeModule } from './get-weeks-in-month.pipe';
import { GetDecadePipeModule } from './get-decade.pipe';
import { GetWeekYearPipeModule } from './get-week-year.pipe';
import { LastDayOfISOWeekPipeModule } from './last-day-of-iso-week.pipe';
import { LastDayOfISOWeekYearPipeModule } from './last-day-of-iso-week-year.pipe';
import { LastDayOfMonthPipeModule } from './last-day-of-month.pipe';
import { LastDayOfQuarterPipeModule } from './last-day-of-quarter.pipe';
import { LastDayOfWeekPipeModule } from './last-day-of-week.pipe';
import { LastDayOfYearPipeModule } from './last-day-of-year.pipe';
import { LastDayOfDecadePipeModule } from './last-day-of-decade.pipe';
import { MaxPipeModule } from './max.pipe';
import { MinPipeModule } from './min.pipe';
import { StartOfDayPipeModule } from './start-of-day.pipe';
import { StartOfHourPipeModule } from './start-of-hour.pipe';
import { StartOfISOWeekPipeModule } from './start-of-iso-week.pipe';
import { StartOfISOWeekYearPipeModule } from './start-of-iso-week-year.pipe';
import { StartOfMinutePipeModule } from './start-of-minute.pipe';
import { StartOfMonthPipeModule } from './start-of-month.pipe';
import { StartOfQuarterPipeModule } from './start-of-quarter.pipe';
import { StartOfSecondPipeModule } from './start-of-second.pipe';
import { StartOfTodayPipeModule } from './start-of-today.pipe';
import { StartOfTomorrowPipeModule } from './start-of-tomorrow.pipe';
import { StartOfWeekPipeModule } from './start-of-week.pipe';
import { StartOfYearPipeModule } from './start-of-year.pipe';
import { StartOfYesterdayPipeModule } from './start-of-yesterday.pipe';
import { StartOfDecadePipeModule } from './start-of-decade.pipe';
import { StartOfWeekYearPipeModule } from './start-of-week-year.pipe';
import { SubDaysPipeModule } from './sub-days.pipe';
import { SubHoursPipeModule } from './sub-hours.pipe';
import { SubISOWeekYearsPipeModule } from './sub-iso-week-years.pipe';
import { SubMillisecondsPipeModule } from './sub-milliseconds.pipe';
import { SubMinutesPipeModule } from './sub-minutes.pipe';
import { SubMonthsPipeModule } from './sub-months.pipe';
import { SubQuartersPipeModule } from './sub-quarters.pipe';
import { SubSecondsPipeModule } from './sub-seconds.pipe';
import { SubWeeksPipeModule } from './sub-weeks.pipe';
import { SubYearsPipeModule } from './sub-years.pipe';
import { IsAfterPipeModule } from './is-after.pipe';
import { IsBeforePipeModule } from './is-before.pipe';
import { IsDatePipeModule } from './is-date.pipe';
import { IsEqualPipeModule } from './is-equal.pipe';
import { IsExistsPipeModule } from './is-exists.pipe';
import { IsFirstDayOfMonthPipeModule } from './is-first-day-of-month.pipe';
import { IsFridayPipeModule } from './is-friday.pipe';
import { IsFuturePipeModule } from './is-future.pipe';
import { IsLastDayOfMonthPipeModule } from './is-last-day-of-month.pipe';
import { IsLeapYearPipeModule } from './is-leap-year.pipe';
import { IsMatchPipeModule } from './is-match.pipe';
import { IsMondayPipeModule } from './is-monday.pipe';
import { IsPastPipeModule } from './is-past.pipe';
import { IsSameDayPipeModule } from './is-same-day.pipe';
import { IsSameHourPipeModule } from './is-same-hour.pipe';
import { IsSameISOWeekYearPipeModule } from './is-same-isoweek-year.pipe';
import { IsSameISOWeekPipeModule } from './is-same-isoweek.pipe';
import { IsSameMinutePipeModule } from './is-same-minute.pipe';
import { IsSameMonthPipeModule } from './is-same-month.pipe';
import { IsSameQuarterPipeModule } from './is-same-quarter.pipe';
import { IsSameSecondPipeModule } from './is-same-second.pipe';
import { IsSameWeekPipeModule } from './is-same-week.pipe';
import { IsSameYearPipeModule } from './is-same-year.pipe';
import { IsSaturdayPipeModule } from './is-saturday.pipe';
import { IsSundayPipeModule } from './is-sunday.pipe';
import { IsThisHourPipeModule } from './is-this-hour.pipe';
import { IsThisISOWeekPipeModule } from './is-this-isoweek.pipe';
import { IsThisMinutePipeModule } from './is-this-minute.pipe';
import { IsThisMonthPipeModule } from './is-this-month.pipe';
import { IsThisQuarterPipeModule } from './is-this-quarter.pipe';
import { IsThisSecondPipeModule } from './is-this-second.pipe';
import { IsThisWeekPipeModule } from './is-this-week.pipe';
import { IsThisYearPipeModule } from './is-this-year.pipe';
import { IsThursdayPipeModule } from './is-thursday.pipe';
import { IsTodayPipeModule } from './is-today.pipe';
import { IsTomorrowPipeModule } from './is-tomorrow.pipe';
import { IsTuesdayPipeModule } from './is-tuesday.pipe';
import { IsValidPipeModule } from './is-valid.pipe';
import { IsWednesdayPipeModule } from './is-wednesday.pipe';
import { IsWeekendPipeModule } from './is-weekend.pipe';
import { IsWithinIntervalPipeModule } from './is-within-interval.pipe';
import { IsYesterdayPipeModule } from './is-yesterday.pipe';
import { WeekdayNamePipeModule } from './utils/weekday-name.pipe';
import { ParsePipeModule } from './parse.pipe';
import { GetWeekPurePipeModule } from './get-week.pure.pipe';
import { GetWeekOfMonthPurePipeModule } from './get-week-of-month.pure.pipe';
import { GetWeeksInMonthPurePipeModule } from './get-weeks-in-month.pure.pipe';
import { GetWeekYearPurePipeModule } from './get-week-year.pure.pipe';
import { StartOfWeekPurePipeModule } from './start-of-week.pure.pipe';
import { StartOfWeekYearPurePipeModule } from './start-of-week-year.pure.pipe';
import { LastDayOfWeekPurePipeModule } from './last-day-of-week.pure.pipe';
import { ParsePurePipeModule } from './parse.pure.pipe';
import { ParseIsoPipeModule } from './parse-iso.pipe';
import { FormatDurationPipeModule } from './format-duration.pipe';
import { FormatDurationPurePipeModule } from './format-duration.pure.pipe';
import { FormatRelativeToNowPipeModule } from './utils/format-relative-to-now.pipe';
import { FormatRelativeToNowPurePipeModule } from './utils/format-relative-to-now.pure.pipe';

const PIPES = [
  AddBusinessDaysPipeModule,
  AddDaysPipeModule,
  AddHoursPipeModule,
  AddISOWeekYearsPipeModule,
  AddMillisecondsPipeModule,
  AddMinutesPipeModule,
  AddMonthsPipeModule,
  AddQuartersPipeModule,
  AddSecondsPipeModule,
  AddWeeksPipeModule,
  AddYearsPipeModule,
  ClosestToPipeModule,
  FormatPipeModule,
  FormatRelativePipeModule,
  DifferenceInCalendarDaysPipeModule,
  DifferenceInCalendarISOWeeksPipeModule,
  DifferenceInCalendarISOWeekYearsPipeModule,
  DifferenceInCalendarQuartersPipeModule,
  DifferenceInCalendarMonthsPipeModule,
  DifferenceInCalendarWeeksPipeModule,
  DifferenceInCalendarYearsPipeModule,
  DifferenceInDaysPipeModule,
  DifferenceInHoursPipeModule,
  DifferenceInISOWeekYearsPipeModule,
  DifferenceInMillisecondsPipeModule,
  DifferenceInMinutesPipeModule,
  DifferenceInMonthsPipeModule,
  DifferenceInQuartersPipeModule,
  DifferenceInSecondsPipeModule,
  DifferenceInWeeksPipeModule,
  DifferenceInYearsPipeModule,
  DifferenceInBusinessDaysPipeModule,
  FormatDistancePipeModule,
  FormatDistanceStrictPipeModule,
  FormatDistanceToNowPipeModule,
  FormatDistanceToNowStrictPipeModule,
  EndOfDayPipeModule,
  EndOfHourPipeModule,
  EndOfISOWeekYearPipeModule,
  EndOfISOWeekPipeModule,
  EndOfMinutePipeModule,
  EndOfMonthPipeModule,
  EndOfQuarterPipeModule,
  EndOfSecondPipeModule,
  EndOfTodayPipeModule,
  EndOfTomorrowPipeModule,
  EndOfWeekPipeModule,
  EndOfYearPipeModule,
  EndOfYesterdayPipeModule,
  GetDatePipeModule,
  GetDayOfYearPipeModule,
  GetDayPipeModule,
  GetDaysInMonthPipeModule,
  GetDaysInYearPipeModule,
  GetHoursPipeModule,
  GetISODayPipeModule,
  GetISOWeekPipeModule,
  GetISOWeeksInYearPipeModule,
  GetISOWeekYearPipeModule,
  GetMillisecondsPipeModule,
  GetMinutesPipeModule,
  GetMonthPipeModule,
  GetOverlappingDaysInIntervalsPipeModule,
  GetQuarterPipeModule,
  GetSecondsPipeModule,
  GetTimePipeModule,
  GetUnixTimePipeModule,
  GetYearPipeModule,
  GetWeekPipeModule,
  GetWeekOfMonthPipeModule,
  GetWeeksInMonthPipeModule,
  GetDecadePipeModule,
  GetWeekYearPipeModule,
  LastDayOfISOWeekPipeModule,
  LastDayOfISOWeekYearPipeModule,
  LastDayOfMonthPipeModule,
  LastDayOfQuarterPipeModule,
  LastDayOfWeekPipeModule,
  LastDayOfYearPipeModule,
  LastDayOfDecadePipeModule,
  MaxPipeModule,
  MinPipeModule,
  StartOfDayPipeModule,
  StartOfHourPipeModule,
  StartOfISOWeekPipeModule,
  StartOfISOWeekYearPipeModule,
  StartOfMinutePipeModule,
  StartOfMonthPipeModule,
  StartOfQuarterPipeModule,
  StartOfSecondPipeModule,
  StartOfTodayPipeModule,
  StartOfTomorrowPipeModule,
  StartOfWeekPipeModule,
  StartOfYearPipeModule,
  StartOfYesterdayPipeModule,
  StartOfDecadePipeModule,
  StartOfWeekYearPipeModule,
  SubDaysPipeModule,
  SubHoursPipeModule,
  SubISOWeekYearsPipeModule,
  SubMillisecondsPipeModule,
  SubMinutesPipeModule,
  SubMonthsPipeModule,
  SubQuartersPipeModule,
  SubSecondsPipeModule,
  SubWeeksPipeModule,
  SubYearsPipeModule,
  IsAfterPipeModule,
  IsBeforePipeModule,
  IsDatePipeModule,
  IsEqualPipeModule,
  IsFuturePipeModule,
  IsPastPipeModule,
  IsValidPipeModule,
  IsTodayPipeModule,
  IsWeekendPipeModule,
  IsSameMonthPipeModule,
  IsExistsPipeModule,
  IsFirstDayOfMonthPipeModule,
  IsFridayPipeModule,
  IsLastDayOfMonthPipeModule,
  IsLeapYearPipeModule,
  IsMatchPipeModule,
  IsMondayPipeModule,
  IsSameDayPipeModule,
  IsSameHourPipeModule,
  IsSameISOWeekPipeModule,
  IsSameISOWeekYearPipeModule,
  IsSameMinutePipeModule,
  IsSameQuarterPipeModule,
  IsSameSecondPipeModule,
  IsSameWeekPipeModule,
  IsSaturdayPipeModule,
  IsSundayPipeModule,
  IsThisHourPipeModule,
  IsThisISOWeekPipeModule,
  IsThisMinutePipeModule,
  IsThisMonthPipeModule,
  IsThisQuarterPipeModule,
  IsThisSecondPipeModule,
  IsThisWeekPipeModule,
  IsThisYearPipeModule,
  IsThursdayPipeModule,
  IsTomorrowPipeModule,
  IsTuesdayPipeModule,
  IsWednesdayPipeModule,
  IsWithinIntervalPipeModule,
  IsYesterdayPipeModule,
  ParsePipeModule,
  WeekdayNamePipeModule,
  IsSameYearPipeModule,
  FormatPurePipeModule,
  FormatRelativePurePipeModule,
  FormatDistancePurePipeModule,
  FormatDistanceStrictPurePipeModule,
  FormatDistanceToNowPurePipeModule,
  FormatDistanceToNowStrictPurePipeModule,
  GetWeekPurePipeModule,
  GetWeekOfMonthPurePipeModule,
  GetWeeksInMonthPurePipeModule,
  GetWeekYearPurePipeModule,
  StartOfWeekPurePipeModule,
  StartOfWeekYearPurePipeModule,
  LastDayOfWeekPurePipeModule,
  ParsePurePipeModule,
  ParseIsoPipeModule,
  FormatDurationPipeModule,
  FormatDurationPurePipeModule,
  FormatRelativeToNowPipeModule,
  FormatRelativeToNowPurePipeModule
];

@NgModule({
  exports: PIPES
})
export class DateFnsModule {
  static forRoot(): ModuleWithProviders<DateFnsModule> {
    return {
      ngModule: DateFnsModule,
      providers: [DateFnsConfigurationService]
    };
  }
}
