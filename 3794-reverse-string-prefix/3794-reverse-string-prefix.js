/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    const front = s.slice(0, k);
    const back = s.slice(k);
    const reversedFront = front.split('').reverse().join('');
    return reversedFront + back
};