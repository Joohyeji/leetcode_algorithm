/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s

    let rows = Array(numRows).fill('');
    let curRow = 0;
    let direction = false
    
    for (let char of s) {
        rows[curRow] += char;
        if (curRow === 0 || curRow === numRows - 1) {
            direction = !direction   
        }
        curRow += direction ? 1 : -1
    }
    return rows.join('')
};