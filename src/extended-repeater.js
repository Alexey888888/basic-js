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
  //str = str.toString();
  let repeatTimes;
  let separator = "+";
  let addition = "";
  let additionRepeatTimes;
  let additionSeparator = "|";
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
      for (let i = 1; i < repeatTimes; i++) {
        res += str;
        for (let j = 1; j < additionRepeatTimes; j++) {
          res += addition + additionSeparator;
        }
        res += addition;
        res += separator;
      }
      res += str;
      for (let ii = 1; ii < additionRepeatTimes; ii++) {
        res += addition + additionSeparator;
      }
      res += addition;
    } else {
      for (let jj = 1; jj < repeatTimes; jj++) {
        res += str + addition + separator;
      }
      res += str + addition;
    }
  } else {
    if (additionRepeatTimes) {
      res += str;
      for (let iii = 1; iii < additionRepeatTimes; iii++) {
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
