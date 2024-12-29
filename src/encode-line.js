const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (typeof str !== 'string') return false;

  let encoded = '';
  let i = 0;

  while (i < str.length) {
    let count = 1;
    while (i + 1 < str.length && str[i] === str[i + 1]) {
      count++;
      i++;
    }
    encoded += (count > 1 ? count : '') + str[i];
    i++;
  }

  return encoded;
}

module.exports = {
  encodeLine
};
