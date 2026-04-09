/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const result = [];
    const countMap = new Map();

    for(const num of nums) {
        const freq = countMap.get(num) || 0

        if (freq === result.length) {
            result.push([])
        }
        result[freq].push(num)
        countMap.set(num, freq + 1)
    }
    return result
};