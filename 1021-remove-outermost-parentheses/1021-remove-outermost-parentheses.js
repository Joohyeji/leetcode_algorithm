/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let opened = 0;

    for (const char of s) {
        if (char === '(') {
            if (opened > 0) {
                result += char
            }
            opened ++;
        } else {
            opened --;
            if (opened > 0) {
                result += char;
            }
        }
    }
    return result;
};