// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// MY FAV OPTION

function reverse(str) {
  return str.split('').reverse().join('');
}

/*

ANOTHER OPTION

function reverse(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

A THIRD OPTION

function reverse(str) {
  var split = str.split('');
  var reversed = [];
  for (var i = 0; i < split.length; i++) {
    reversed.unshift(split[i]);
  }
  return reversed.join('');
}

A FOURTH OPTION

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
*/

module.exports = reverse;
