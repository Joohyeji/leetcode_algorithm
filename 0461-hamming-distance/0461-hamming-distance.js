/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y;
    let distance = 0;

    while (xor !== 0) {
        xor = xor & (xor-1);
        distance++;
    }
    
return distance;
};