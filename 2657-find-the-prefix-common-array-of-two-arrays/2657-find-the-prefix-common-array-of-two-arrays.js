/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;
    const freq = new Array(n + 1).fill(0);
    const C = []
    let commonCount = 0;

    for (let i = 0; i < n; i++) {
        freq[A[i]]++
        if (freq[A[i]] === 2) commonCount++

        freq[B[i]]++;
        if (freq[B[i]] === 2) commonCount++

        C.push(commonCount)
    }
    return C
};