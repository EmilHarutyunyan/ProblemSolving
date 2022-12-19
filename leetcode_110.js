/*
Given a binary tree, determine if it is 
height-balanced

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true

*/
function isBalanced(root) {
  let result = true;
  const recBin = (root) => {
    if (root === null) {
      return 0;
    }

    let left = recBin(root.left);

    let right = recBin(root.right);

    if (Math.abs(left - right) > 1) {
      res = false;
    }
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  };
  recBin(root);
  return result;
}

// Time Complexity O(n)
// Space Complexity O(1)