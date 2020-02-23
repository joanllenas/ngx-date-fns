import { removePipe } from './test-utils';
import { IsFuturePipe } from './is-future.pipe';
import { IsAfterPipe } from './is-after.pipe';
import { IsBeforePipe } from './is-before.pipe';
import { IsDatePipe } from './is-date.pipe';
import { IsEqualPipe } from './is-equal.pipe';
import { IsPastPipe } from './is-past.pipe';
import { IsValidPipe } from './is-valid.pipe';

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
    }
  ].forEach(test => {
    it(`${test.date} ${removePipe(test.pipe.constructor.name)}? ${
      test.expected
    }`, () => {
      expect(test.pipe.transform(test.date)).toEqual(test.expected);
    });
  });
});
