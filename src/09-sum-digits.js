/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = 0;
  const strN = String(n);
  for (let i = 0; i < strN.length; i++) {
    res += Number(strN[i]);
  }
  if (res > 9) {
    return getSumOfDigits(res);
  } return res;
}

module.exports = getSumOfDigits;
