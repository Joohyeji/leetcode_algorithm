/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //매거진에 있는 단어들 조합
    let magazineCount = {}

    for(let char of magazine) {
        if (!magazineCount[char]) {
            magazineCount[char] = 0
        }
        magazineCount[char]++;
    }

    for (let char of ransomNote) {
        if(!magazineCount[char] || magazineCount[char] === 0) {
            return false
        }
        magazineCount[char] --
    }

    return true
};