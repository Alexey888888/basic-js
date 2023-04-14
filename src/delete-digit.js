const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let resArr = [];
  let res;
  let currentDelItem;
  let arrN = n.toString().split("");
  for (let i = 0; i < arrN.length; i++) {
    currentDelItem = arrN.splice(arrN.indexOf(arrN[i], 0), 1);
    resArr.push(arrN.join(""));
    console.log(resArr);
    arrN.splice(arrN.indexOf(arrN[i]), 0, currentDelItem);
  }
  res = Math.max(...resArr);
  return res;
}

module.exports = {
  deleteDigit,
};
