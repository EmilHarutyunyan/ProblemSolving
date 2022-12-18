/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2


Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

function maxDepth(root) {
  let length = 0;
  let count = 1;
  let recDepth = function (root, count) {
    if (!root) {
      return 0;
    }

    if (root.left) {
      recDepth(root.left, count + 1);
    }

    if (root.right) {
      recDepth(root.right, count + 1);
    }

    if (!root.left && !root.right) {
      length = length > count ? length : count;
    }
  }

  recDepth(root, count);
  return length;
};
// Space Complexity O(1)
// Time Complexity O(n)
