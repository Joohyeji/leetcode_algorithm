/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const newMap = {}
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]
        if (nums.includes(difference)) {
            if (nums.indexOf(difference) === i) continue
            return [i, nums.indexOf(difference)]
        }
    }
    
};