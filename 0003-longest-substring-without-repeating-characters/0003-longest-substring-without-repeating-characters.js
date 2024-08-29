/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0
    let maxLen = 0
    let usedChars = new Map()
    
    for (let i = 0; i < s.length; i++) {
        if(usedChars.has(s[i])){
            start = Math.max(usedChars.get(s[i]) + 1, start)
        }
        maxLen = Math.max(maxLen, i - start + 1)
        usedChars.set(s[i], i)
    }
    return maxLen
};