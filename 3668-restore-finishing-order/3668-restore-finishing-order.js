/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    const friendSet = new Set(friends);
    return order.filter(id => friendSet.has(id));
};