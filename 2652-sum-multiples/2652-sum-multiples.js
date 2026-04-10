/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let count = 0;
    for (let i= 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            count += i;
        }
    }
    return count
};