// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

/*

ONE OPTION

function capitalize(x) {
  x = x[0].toUpperCase() + x.substr(1)
  for (var i = 0;i < x.length; i++) {
    if (x[i - 1] === ' ') {
      x = x.substr(0,i) + x[i].toUpperCase() + x.substr(i+1);
    }
  }
  return x;
}
*/

module.exports = capitalize;
