import { isInvalidDate } from './utils';

describe(`utils`, () => {
  describe(`isInvalidDate`, () => {
    [null, undefined, ''].forEach(value => {
      it(`should be invalid when ${JSON.stringify(value)} is provided`, () => {
        expect(isInvalidDate(value)).toBe(true);
      });
    });
    [0, '2019-07-28T15:09:36.815Z'].forEach(value => {
      it(`should be valid when ${JSON.stringify(value)} is provided`, () => {
        expect(isInvalidDate(value)).toBe(false);
      });
    });
  });
});
