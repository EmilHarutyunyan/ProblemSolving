// Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseList(head) {
  // Space Complexity O(n)
  let prevNode = null;
  let nextNode = null
  let cpHead = head
  // Time Complexity O(n)
  while (cpHead) {
      nextNode = cpHead.next;
      cpHead.next = prevNode;
      prevNode = cpHead;
      cpHead = nextNode;
  }
  return prevNode
};