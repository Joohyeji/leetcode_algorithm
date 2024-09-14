/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    const tempArr = []

    const backtrack = (currentSum, startIndex) => {
        if (currentSum > target) {
            return
        }
        if (currentSum === target) {
            result.push(tempArr.slice())
            return
        } else {
            for (let i = startIndex; i < candidates.length; i++) {
                tempArr.push(candidates[i])
                backtrack(currentSum + candidates[i], i)
                tempArr.pop()
            }
        }
    }
    backtrack(0,0)
    return result
};