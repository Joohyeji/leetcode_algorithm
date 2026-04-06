/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    const consistentWords = words.filter(word => {
        return [...word].every(char => allowedSet.has(char))
    })
    return consistentWords.length;
};