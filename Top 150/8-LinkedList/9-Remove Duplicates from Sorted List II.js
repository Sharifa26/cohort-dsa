/**Remove Duplicates from Sorted List II
 * 
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
 */


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(4);
head.next.next.next.next.next = new Node(4);
head.next.next.next.next.next.next = new Node(5);

var deleteDuplicates = function (head) {
    let dummy = new Node(-1);
    dummy.next = head;
    let prev = dummy;
    let cur = head;

    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            while (cur.next && cur.val === cur.next.val) {
                cur = cur.next;
            }
            prev.next = cur.next; // Skip all duplicates
        } else {
            prev = prev.next; // Move to next distinct node
        }
        cur = cur.next;
    }

    return dummy.next;
};


console.log(deleteDuplicates(head));
