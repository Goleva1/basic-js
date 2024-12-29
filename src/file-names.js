const { NotImplementedError } = require('../extensions/index.js');

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
  const nameCount = new Map();
  const result = [];

  names.forEach((name) => {
    if (nameCount.has(name)) {
      let k = nameCount.get(name);
      let newName;
      do {
        k += 1;
        newName = `${name}(${k})`;
      } while (nameCount.has(newName));
      nameCount.set(name, k);
      nameCount.set(newName, 0);
      result.push(newName);
    } else {
      nameCount.set(name, 0);
      result.push(name);
    }
  });

  return result;
}

module.exports = {
  renameFiles
};

