/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let charCount = {};

    for (let char of s) {
        if (charCount[char]){
            charCount[char]++
        } else {
            charCount[char] = 1
        }
    }

    let length = 0;
    let hasOdd = false
    for (let count of Object.values(charCount)){
        if (count % 2 == 0) {
            length += count
        } else {
            length += count - 1
            hasOdd = true
        }
    }

    return hasOdd ? length + 1 : length
};