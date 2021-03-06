/**
  * Russian peasant multiplication
  */

function peasant(a, b) {
  let x = a;
  let y = b;
  let z = 0;

  while ( x > 0 ) {
    if ( x % 2 === 1) z = z + y;
    y = y << 1;
    x = x >> 1;
  }

  return z;
}

module.exports = peasant;
