/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = 0;
    accounts.forEach(arr => {
        const total = arr.reduce((acc, curr) => {
                return acc + curr;
            }, 0);

        if(richest < total) richest = total
    })

    return richest
};