/* 
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1

*/

let firstUniqChar = function(s) {
  let oneIndx = -1;
  for (let i = 0; i < s.length; ++i) {
    let bool = false;
    for (let j = 0; j < s.length; ++j) {
      if (s[i] === s[j] && j !== i) {
        bool = true;
        break;
      }
    }
    if (!bool) {
      oneIndx = i;
      break;
    }
  }
  return oneIndx;
};
console.log(firstUniqChar("loveleetcode"));
