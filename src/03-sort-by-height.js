/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let notMinus = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      notMinus.push(arr[i])
    }
  }
  notMinus = notMinus.sort();
  const res = [];
  let count = 0;
  for (let l = 0; l < arr.length; l++) {
    if (arr[l] === -1) {
      count = count + 1;
      res.push(arr[l]);
    } else {
      res.push(notMinus[l - count])
    }
  } return res; 
}

module.exports = sortByHeight;
