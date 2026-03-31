/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const rowMap = {}
    const rows = ["qwertyuiop", "asdfghjkl","zxcvbnm"]

    rows.forEach((row, index) => {
        for (let char of row) {
            rowMap[char] = index + 1;
        }
    })

    const result = [];

    for (let word of words) {
        const lowerWord = word.toLowerCase();
        const firstRow = rowMap[lowerWord[0]];
        let isValid = true;

        for (let i = 1; i < lowerWord.length; i++) {
            if (rowMap[lowerWord[i]] !== firstRow) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            result.push(word)
        }
    }

    return result
};