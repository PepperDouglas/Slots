var assert = require('assert');
let fn = require('./src/script.js');
let symbols = [
  [25, 'Circle'],
  [20, 'Drop'], 
  [20, 'Eye'],
  [15, 'Triangle'],
  [15, 'Square'],
  [5, 'Pentagram']];

describe('Slot Engine suite', function() {

  describe('general functional', function() {

    it('should print second element of symbols', function() {
      assert.equal(fn.symbols[2][1], 'Eye');
    });

    it('should return an array of weigths to a hundred', function() {
      assert.deepStrictEqual(fn.diffToHundred(symbols), [25, 45, 65, 80, 95, 100]);
    });

    it('should return an array of length 8', function () {
      assert.equal(fn.createReel(symbols).length, 8);
    });

    it('should return an array of length 12 with arrays of length 8', function () {
      assert.deepStrictEqual(fn.allReels(symbols)[11].length, 8);
    });

    /*it('go over an array a set number of times and if neccesary loop itself', function () {
      let testArray = [1, 2, 3, 4, 5, 6, 7, 8];
      assert.deepStrictEqual(fn.loopArray(5, 6, testArray), 3);
    });*/

  });
});