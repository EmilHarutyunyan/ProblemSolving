
/*
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
It repeats until no input elements remain.
The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

Example 2:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 
*/
function insertionSortList(head) {
  let cur, newList, ptr;

  if (head === null || head.next === null) {
    return head;
  }

  newList = new ListNode(null, head);
  cur = head.next;
  head.next = null;
  head = newList;

  while (cur) {
    while (head.next && cur.val > head.next.val) {
      head = head.next;
    }

    ptr = cur.next;
    cur.next = head.next;
    head.next = cur;
    cur = ptr;
    head = newList;
  }

  return newList.next;
}
// Space Complexity O(1)
// Time Complexity O(n^2)
