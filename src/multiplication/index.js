/**
  * Integer multiplication algorithms
  */

const peasant = require('./peasant');

function multiply(a, b, algorithm) {
  switch (algorithm) {
    case 'peasant': return peasant(a, b);
  }
}

module.exports = multiply;
