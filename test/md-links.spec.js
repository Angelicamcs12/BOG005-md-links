const mdLinks = require('../');
const { statsLinks, validateLinks } = require('../lib/functions');
const { mocks } = require('../mocks');


describe('Probando funciones', () => {

  it('mdLinks sea una función', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('mdLinks validate en false', (done) => {
    mdLinks(mocks.path, { validate: false }).then(res => {
      const validateFalse = mocks.objValidateFalse;
      expect(res).toEqual(validateFalse)
      done()
    })
  });

  it('stats sea una funcion', () => {
    expect(typeof statsLinks).toBe('function');
  });

  it('stats en true', (done) => {
    mdLinks(mocks.path, { validate: true }).then(res => {
      const resStats = statsLinks(res)
      const inStatsTrue = mocks.statsTrue
      expect(resStats).toEqual(inStatsTrue)
      done()
    })
  });

  it('validateLinks sea una funcion', () => {
    expect(typeof validateLinks).toBe('function');
  });

  it('validateLinks cuando tiene las dos opciones', (done) => {
    mdLinks(mocks.path, { validate: true }).then(res => {
      const resValidateLinks = validateLinks(res)
      const inValidateLinks = mocks.validateLinks
      expect(resValidateLinks).toEqual(inValidateLinks)
      done()
    })
  });

});
