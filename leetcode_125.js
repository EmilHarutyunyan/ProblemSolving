/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/
function isPalindrome(s) {
  let sOutput = [];
  // O(n)
  for(let i = 0; i < s.length; ++i) {
      if((65 <= s[i].charCodeAt(0) && 90 >= s[i].charCodeAt(0)) 
      || (97 <= s[i].charCodeAt(0) && 122 >= s[i].charCodeAt(0))
      || ('0' <= s[i] && '9' >= s[i]))
      {
          (65 <= s[i].charCodeAt(0) && 90 >= s[i].charCodeAt(0)) 
          ? sOutput.push(32 + s[i].charCodeAt(0)) 
          : sOutput.push(s[i].charCodeAt(0))
      }
  }
  //O(1)
  if(sOutput.length === 0) {
    return true
  }
  // O(n/2) -> O(n)
  for(let j = 0; j < sOutput.length/2; ++j) {
    if(sOutput[j] !== sOutput[sOutput.length - j - 1]) {
       return false;
    } 
  }
  return true
};
// Time Complexity O(2n) -> O(n)
// Space Complexity O(n)
