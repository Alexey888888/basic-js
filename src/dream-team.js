const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (
    Boolean(members) === false ||
    members === " " ||
    !Array.isArray(members)
  ) {
    return false;
  }
  let result = "";
  members.forEach((item) => {
    if (typeof item !== "string" || Boolean(item) === false || item === " ") {
      return false;
    } else {
      item = item.trim();
      result += item[0];
    }
  });
  return result.toUpperCase().split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
