/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const openingBracket = ['(', '[','{']
    const closingBracket = [')', ']', '}']

    for(let i=0; i < s.length; i++) {
        if (openingBracket.includes(s[i])){
            stack.push(s[i])
        } else {
            let top = stack.pop();
             let index = openingBracket.indexOf(top)
            if (closingBracket[index] !== s[i]) {
                return false;
            }
        }
    }

    return stack.length > 0 ? false : true
};