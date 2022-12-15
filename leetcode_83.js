/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

function deleteDuplicates(head) {
  // Space Complexity O(1)
  const newHead = head;

   // Time Complexity O(n)
   while(head && head.next){
       if(head.next.val === head.val) {
           head.next = head.next.next
       }
       else {
           head = head.next
       }
   }
   return newHead
};