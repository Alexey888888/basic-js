const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let arr1, arr2;
  arr1 = s1.length >= s2.length ? s1.split("") : s2.split("");
  arr2 = arr1.length === s1.length ? s2.split("") : s1.split("");
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr2.splice(arr1[i], 1);
      res++;
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
