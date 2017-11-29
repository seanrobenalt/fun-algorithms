// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = (''+n)
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

/*

ONE OPTION

function reverseInt(n) {
  var rev = parseInt(('' + n).split('').reverse().join(''));
  if (Math.sign(n) === -1) {
    return (rev) * -1;
  } else {
    return rev;
  }
}

*/

module.exports = reverseInt;
