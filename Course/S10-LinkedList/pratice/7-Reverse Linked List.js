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

function linked(val, next) {
    this.val = (val == undefined) ? 0 : val;
    this.next = (next == undefined) ? null : next;
}

let LinkedList = new linked(1);
LinkedList.next = new linked(2);
LinkedList.next.next = new linked(3);
LinkedList.next.next.next = new linked(4);
LinkedList.next.next.next.next = new linked(5);
LinkedList.next.next.next.next.next = new linked(6);


var reverseList = function (head) {
    let dummy = null;
    let temp = dummy;
    let current = head;

    while (current !== null) {
        temp = dummy;
        dummy = current;
        current = current.next;
        dummy.next = temp;
    }
    return dummy;
};

let ans = reverseList(LinkedList)

console.log(ans);

/**
Time complexity: O(n)
Space complexity: O(1)
 */


function print(list) {
    let current = list;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

print(ans);