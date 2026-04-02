/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (!arr.length) return arr

    const result = [];
    let smArr= []
    for (let i = 0; i < arr.length; i++) {
        smArr.push(arr[i])
        if(smArr.length === size || i === arr.length - 1) {
            result.push(smArr)
            smArr = []
        }
    }

    return result
};
