/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
 }

*/

function inorderTraversal(root) {
  let rootValues = [];
  let recBin = (rootRec) => {
    if (!rootRec) {
      return []
    };
    if (rootRec.left) {
      let val = recBin(rootRec.left)
      if (val) {
        rootValues.push(val)
      }
    }

    if (rootRec.val != undefined) {
      rootValues.push(rootRec.val)
    };

    if (rootRec.right) {
      let val = recBin(rootRec.right)
      if (val) {
        rootValues.push(val)
      }
    }
    return;
  }
  recBin(root);
  return rootValues;
};

// Space Complexity (n)
// Time  Complexity O(n)