import { PipeTransform } from '@angular/core';

export const removePipe = (name: string) =>
  name
    .substr(0, name.length - 4)
    .replace(/([A-Z])/g, ' $1')
    .trim();

export const nullOrUndefinedDateReturnsEmptyStringTest = (
  pipe: PipeTransform,
  pipeArgs: any[]
) => {
  it('should work when providing null or undefined Dates', () => {
    expect(pipe.transform.apply(null, pipeArgs as any)).toBe('');
  });
};
