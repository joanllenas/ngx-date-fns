import { isValidDate } from './utils';

describe('utils', () => {
  describe('isValidDate', () => {
    it('should return false when an empty string is provided', () => {
      expect(isValidDate('')).toBe(false);
    });
    it('should return false when undefined is provided', () => {
      expect(isValidDate(undefined)).toBe(false);
    });
    it('should return false when null is provided', () => {
      expect(isValidDate(null)).toBe(false);
    });
    it('should return false when an invalid Date is provided', () => {
      expect(isValidDate(new Date(NaN))).toBe(false);
    });
    it('should return true when an valid Date is provided', () => {
      expect(isValidDate(new Date())).toBe(true);
    });
    it('should return true when an valid string Date is provided', () => {
      expect(isValidDate(new Date().toISOString())).toBe(true);
    });
  });
});
