import 'es6-shim';
import 'reflect-metadata';
import { DistanceInWordsPipe } from './distance-in-words.pipe';

describe('DistanceInWordsPipe', () => {
  var pipe: DistanceInWordsPipe;

  beforeEach(() => pipe = new DistanceInWordsPipe());

  describe('#transform', () => {
    it('should throw when provided no arguments', () => {
      expect(() => (pipe.transform as any)()).toThrow();
    });
  });
});
