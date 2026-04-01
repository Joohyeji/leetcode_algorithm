/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    const remainder = totalSum % k;

    return remainder;
};