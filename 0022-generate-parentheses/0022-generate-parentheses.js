/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []

    const backtrack = (currentString, open, close) => {
        if (currentString.length === n * 2) {
            result.push(currentString)
            return
        }
        if (open < n) {
            backtrack(currentString + '(', open + 1, close)
        }
         if (close < open) {
            backtrack(currentString + ')', open, close + 1);
        }
    }
     backtrack('', 0, 0);

     return result
};