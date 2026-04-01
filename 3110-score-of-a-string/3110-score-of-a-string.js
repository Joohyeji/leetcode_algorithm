/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let totalScore = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const current = s.charCodeAt(i);
        const next = s.charCodeAt(i + 1);

        totalScore += Math.abs(current - next);
    }

    return totalScore
};