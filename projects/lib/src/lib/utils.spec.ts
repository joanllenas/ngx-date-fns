import { isValidDate } from './utils';

describe('utils', () => {
  describe('isValidDate', () => {
    it('should return false when undefined is provided', () => {
      expect(isValidDate(undefined)).toBeFalse();
    });
    it('should return false when null is provided', () => {
      expect(isValidDate(null)).toBeFalse();
    });
    it('should return false when an invalid Date is provided', () => {
      expect(isValidDate(new Date(NaN))).toBeFalse();
    });
    it('should return true when an valid Date is provided', () => {
      expect(isValidDate(new Date())).toBeTrue();
    });
  });
});
