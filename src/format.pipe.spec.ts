import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { FormatPipe } from './format.pipe';
import * as esLocale from 'date-fns/locale/es/index.js';

describe('FormatPipe', () => {
  var pipe: FormatPipe;

  beforeEach(() => {
    pipe = new FormatPipe();
  });

  it('should throw when required arguments are not provided', () => {
    expect(() => pipe.transform(undefined))
      .to.throw(Error, FormatPipe.NO_ARGS_ERROR);
  });

  it('should display output correctly', () => {
    expect(pipe.transform(new Date(2014, 1, 11), 'MM/DD/YYYY'))
      .to.equal('02/11/2014');
  });

  it('should display output correctly when providing "locale"', () => {
    expect(pipe.transform(new Date(2014, 6, 2), 'Do [de] MMMM YYYY', {locale: esLocale}))
      .to.equal('2º de julio 2014');
  });
});
