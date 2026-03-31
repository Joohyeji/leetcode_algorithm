/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sortedScores = [...score].sort((a,b) => b - a);
    const rankMap = {}

    sortedScores.forEach((s, index) => {
        if (index === 0) rankMap[s] ="Gold Medal"
        else if (index === 1) rankMap[s] = "Silver Medal";
        else if (index === 2) rankMap[s] = "Bronze Medal";
        else rankMap[s] = (index + 1).toString();
    })

    return score.map(s => rankMap[s])
};