/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const wordLength = words[0].length
    const wordCount = words.length
    const window = wordLength * wordCount
    const wordMap = {}
    for (let word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }

    const result = []

    for (let i = 0; i <= s.length - window; i++) {
        const seenWords = {};
        let j = 0;

        while (j < wordCount) {
            const word = s.substring(i + j * wordLength, i + ( j + 1 ) * wordLength)

            if (!wordMap[word]) break
            seenWords[word] = (seenWords[word] || 0) + 1;
            if (seenWords[word] > wordMap[word]) break;
            j++
        }

        if (j === wordCount) {
            result.push(i);
        }
    }
    return result;
};