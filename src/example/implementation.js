/**
 * This function adds one to its input.
 * @param {number} input any number
 * @returns {number} that number, plus one.
 */
function increment(input) {
  return input + 1;
}

if (module) {
  module.exports = {
    increment,
  }
}
