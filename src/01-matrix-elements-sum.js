/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = matrix[0].reduce((a, b) => (a + b));
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let m = 0; m < matrix[i].length; m++) {
      if (matrix[i][m] > 0) {
        res += matrix[i + 1][m];
      }
    }
  } return res;
}

module.exports = getMatrixElementsSum;
