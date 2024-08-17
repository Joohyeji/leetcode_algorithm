/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let now = root
    while (now) {
        if (p.val < now.val && q.val < now.val) {
            now = now.left;
        } else if (p.val > now.val && q.val > now.val) {
            now = now.right;
        } else {
            return now
        }
    }
};