import { removePipe } from './test-utils';
import { IsFuturePipe } from './is-future.pipe';
import { IsAfterPipe } from './is-after.pipe';
import { IsBeforePipe } from './is-before.pipe';
import { IsDatePipe } from './is-date.pipe';
import { IsEqualPipe } from './is-equal.pipe';
import { IsPastPipe } from './is-past.pipe';
import { IsValidPipe } from './is-valid.pipe';
import { IsTodayPipe } from './is-today.pipe';
import { IsWeekendPipe } from './is-weekend.pipe';
import { IsSameMonthPipe } from './is-same-month.pipe';

describe('Is..? ', () => {
  // Two params
  [
    // IsAfterPipe
    {
      pipe: new IsAfterPipe(),
      dateLeft: new Date(2000, 0, 2),
      dateRight: new Date(2000, 0, 1),
      expected: true
    },
    {
      pipe: new IsAfterPipe(),
      dateLeft: new Date(2000, 0, 3),
      dateRight: new Date(2000, 0, 4),
      expected: false
    },

    // IsBeforePipe
    {
      pipe: new IsBeforePipe(),
      dateLeft: new Date(2000, 0, 2),
      dateRight: new Date(2000, 0, 1),
      expected: false
    },
    {
      pipe: new IsBeforePipe(),
      dateLeft: new Date(2000, 0, 3),
      dateRight: new Date(2000, 0, 4),
      expected: true
    },

    // IsEqualPipe
    {
      pipe: new IsEqualPipe(),
      dateLeft: new Date(2000, 0, 31, 1, 2, 3),
      dateRight: new Date(2000, 0, 31, 1, 2, 4),
      expected: false
    },
    {
      pipe: new IsEqualPipe(),
      dateLeft: new Date(2000, 0, 31, 1, 2, 3),
      dateRight: new Date(2000, 0, 31, 1, 2, 3),
      expected: true
    },

    // IsSameMonthPipe
    {
      pipe: new IsSameMonthPipe(),
      dateLeft: new Date(2000, 0, 31),
      dateRight: new Date(2000, 0, 1),
      expected: true
    },
    {
      pipe: new IsSameMonthPipe(),
      dateLeft: new Date(2000, 0, 31),
      dateRight: new Date(2000, 1, 1),
      expected: false
    }
  ].forEach(test => {
    it(`${test.dateLeft} ${removePipe(test.pipe.constructor.name)} ${
      test.dateRight
    }? ${test.expected}`, () => {
      expect(test.pipe.transform(test.dateLeft, test.dateRight)).toEqual(
        test.expected
      );
    });
  });

  // One param
  [
    // IsDatePipe
    {
      pipe: new IsDatePipe(),
      date: { a: 'hola' },
      expected: false
    },
    {
      pipe: new IsDatePipe(),
      date: new Date(2020, 0, 1),
      expected: true
    },

    // IsFuturePipe
    {
      pipe: new IsFuturePipe(),
      date: new Date(2099, 0, 1),
      expected: true
    },
    {
      pipe: new IsFuturePipe(),
      date: new Date(2020, 0, 1),
      expected: false
    },

    // IsPastPipe
    {
      pipe: new IsPastPipe(),
      date: new Date(2099, 0, 1),
      expected: false
    },
    {
      pipe: new IsPastPipe(),
      date: new Date(2020, 0, 1),
      expected: true
    },

    // IsValidPipe
    {
      pipe: new IsValidPipe(),
      date: new Date(2099, 0, 1),
      expected: true
    },
    {
      pipe: new IsValidPipe(),
      date: new Date(''),
      expected: false
    },

    // IsWeekendPipe
    {
      pipe: new IsWeekendPipe(),
      date: new Date(2020, 2, 29),
      expected: true
    },
    {
      pipe: new IsWeekendPipe(),
      date: new Date(2020, 2, 30),
      expected: false
    }
  ].forEach(test => {
    it(`${test.date} ${removePipe(test.pipe.constructor.name)}? ${
      test.expected
    }`, () => {
      expect(test.pipe.transform(test.date)).toEqual(test.expected);
    });
  });

  describe('isToday()', () => {
    beforeEach(() => {
      jasmine.clock().uninstall();
      jasmine.clock().install();
      jasmine.clock().mockDate(new Date(2014, 9, 6));
    });
    afterEach(() => {
      jasmine.clock().uninstall();
    });

    [
      {
        date: new Date(2014, 9, 6),
        expected: true
      },
      {
        date: new Date(2014, 9, 5),
        expected: false
      }
    ].forEach(test => {
      it(`${test.date} Is Today? ${test.expected}`, () => {
        expect(new IsTodayPipe().transform(test.date)).toEqual(test.expected);
      });
    });
  });
});
