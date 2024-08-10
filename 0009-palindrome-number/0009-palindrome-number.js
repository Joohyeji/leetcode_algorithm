/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    
    let reverse = 0;
    const xcopy = x;

    while ( x > 0) {
        let digit = x % 10
        x = Math.floor( x /10)
        reverse = reverse * 10 + digit
    }
    
    return reverse === xcopy
};