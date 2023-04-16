const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];
  let repeat = [];
  let counter = 0;
  let currentCounter = 1;
  names.forEach((el) => {
    let currentFileName = "";
    let index = "(" + currentCounter + ")";
    if (res.includes(el)) {
      if (repeat.includes(el)) {
        counter++;
        currentCounter += counter;
        index = "(" + currentCounter + ")";
        currentFileName = el + index;
        res.push(currentFileName);
      } else {
        currentFileName = el + index;
        res.push(currentFileName);
        repeat.push(el);
      }
    } else {
      res.push(el);
    }
  });
  return res;
}

module.exports = {
  renameFiles,
};
