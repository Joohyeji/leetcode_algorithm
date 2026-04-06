/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = new Set(['a','e','i','o','u'])
    const vowelMap = {}
    const consonantMap = {}

    let maxVowelFreq = 0
    let maxConsonantFreq = 0

    for(const char of s) {
        if (vowels.has(char)) {
            vowelMap[char] = (vowelMap[char] || 0) + 1
            maxVowelFreq = Math.max(maxVowelFreq, vowelMap[char])
        } else {
            consonantMap[char] = (consonantMap[char] || 0) + 1
            maxConsonantFreq = Math.max(maxConsonantFreq, consonantMap[char])
        }
    }
     return maxVowelFreq + maxConsonantFreq
};