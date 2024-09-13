/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let sequence = "1"
    for (let i = 1; i < n; i++) {
        sequence = runLengthEncoding(sequence)
    }
    return sequence;
};

const runLengthEncoding = (sequence) => {
    let result = '';
    let count = 1;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] === sequence[i - 1]) {
            count++;
        } else {
            result += count.toString() + sequence[i - 1]
            count = 1
        }
    }
    result += count.toString() + sequence[sequence.length - 1]
    return result
}