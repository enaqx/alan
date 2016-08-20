/**
  * Multiplication Algorithms Tests
  */

var assert = require('chai').assert;
var multiply = require('../src/multiplication');

describe('Multiplication Algorithms', () => {
  it('Russian Peasant Multiplicaion', () => {
    assert.equal(multiply(0, 0, 'peasant'), 0);
    assert.equal(multiply(0, 1, 'peasant'), 0);
    assert.equal(multiply(1, 1, 'peasant'), 1);
    assert.equal(multiply(2, 2, 'peasant'), 4);
    assert.equal(multiply(65000, 65000, 'peasant'), 4225000000);
  });
});
