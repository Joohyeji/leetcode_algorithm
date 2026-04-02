/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const map = {}
    const result = []
    for(let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            result.push(nums[i])
        } else {
            map[nums[i]] = true
        }
    }

    return result
};