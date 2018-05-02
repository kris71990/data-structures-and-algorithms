'use strict';

import bracketValidation from '../bracket-validation';

describe('bracket validation', () => {
  test('opening brackets should have corresponding closing brackets in order', () => {
    expect(bracketValidation('[](){}')).toEqual(true);
    expect(bracketValidation('[test]er(ererr){wwww}wwww')).toEqual(true);
    expect(bracketValidation('([]{)')).toEqual(false);
    expect(bracketValidation('([]{)}')).toEqual(false);
    expect(bracketValidation('((d((dd[((dd))]{})))ff)')).toEqual(true);
  });
});
