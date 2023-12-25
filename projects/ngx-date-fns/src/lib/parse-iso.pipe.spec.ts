import { ParseIsoPipe } from './parse-iso.pipe';

describe('ParseIsoPipe', () => {
  it('should parse 2014-02-11T11:30:30', () => {
    expect(new ParseIsoPipe().transform('2014-02-11T11:30:30')).toEqual(
      new Date(2014, 1, 11, 11, 30, 30)
    );
  });

  it('should parse +02014101 with additionalDigits', () => {
    // Convert string '+02014101' to date,
    // if the additional number of digits in the extended year format is 1:
    expect(
      new ParseIsoPipe().transform('+02014101', { additionalDigits: 1 })
    ).toEqual(new Date(2014, 3, 11));
  });
});
