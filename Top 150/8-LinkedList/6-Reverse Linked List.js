/**Reverse Linked List
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
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
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);


var reverseList = function (head) {
    let dummy = null, temp = dummy;
    let curr = head;

    while (curr !== null) {
        temp = dummy;
        dummy = curr;
        curr = curr.next;
        dummy.next = temp;
    }

    return dummy;
};


console.log(reverseList(head));
