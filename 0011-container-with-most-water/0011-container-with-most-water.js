/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max_area = 0;

    while (left < right) {
        const height_left = height[left];
        const height_right = height[right];
        const width = right - left;
        const current_area = Math.min(height_left, height_right) * width;

        max_area = Math.max(max_area, current_area);

        if (height_left < height_right) {
            left++;
        } else {
            right--;
        }
    }

    return max_area;
};