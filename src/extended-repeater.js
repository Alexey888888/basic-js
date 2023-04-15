const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;
  let res = "";
  for (let prop in options) {
    if (prop === "repeatTimes") repeatTimes = options[prop];
    if (prop === "separator") separator = options[prop];
    if (prop === "addition") addition = options[prop];
    if (prop === "additionRepeatTimes") additionRepeatTimes = options[prop];
    if (prop === "additionSeparator") additionSeparator = options[prop];
  }
  if (repeatTimes) {
    if (additionRepeatTimes) {
      for (let i = 0; i < repeatTimes - 1; i++) {
        res += str;
        for (let j = 0; j < additionRepeatTimes - 1; j++) {
          res += addition + additionSeparator;
        }
        res += addition;
        res += separator;
      }
      res += str;
      for (let ii = 0; ii < additionRepeatTimes - 1; ii++) {
        res += addition + additionSeparator;
      }
      res += addition;
    } else {
      for (let jj = 0; jj < repeatTimes - 1; jj++) {
        res += str + addition + separator;
      }
      res += str + addition;
    }
  } else {
    if (additionRepeatTimes) {
      res += str;
      for (let iii = 0; iii < additionRepeatTimes - 1; iii++) {
        res += addition + additionSeparator;
      }
      res += addition;
    } else res += str + addition;
  }
  return res;
  // if (res === RESULT) {
  //   console.log("YES!");
  // } else {
  //   console.log("No");
  // }
}

module.exports = {
  repeater,
};
