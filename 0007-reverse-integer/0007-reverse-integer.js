/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let answer = parseInt(Math.abs(x).toString().split('').reverse().join(''))
   if (answer > 2147483647) {
    return 0
   }
   return x < 0 ? -answer : answer
};