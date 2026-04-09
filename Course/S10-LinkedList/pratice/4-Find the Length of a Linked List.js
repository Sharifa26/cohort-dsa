/**Find the Length of a Linked List
 * 
 * Problem Statement: Given the head of a linked list, print the length of the linked list.
 * 
 * Example : 1
 * 
 * Input: 0->1->2 
Output: 3
Explanation: The list has a total of 3 nodes, thus the length of the list is 3.

Example : 2

Input: 12->5->8->7
Output: 4
Explanation: The list has a total of 4 nodes, thus the length of the list is 4.
 */


function list(val, next) {
    this.val = (val == undefined) ? 0 : val;
    this.next = (next == undefined) ? null : next;
}

let Linked = new list(12);
Linked.next = new list(5);
Linked.next.next = new list(8);
Linked.next.next.next = new list(7);



var Length = function (list) {
    let count = 0;
    let current = list;

    while (current !== null) {
        count++;
        current = current.next;
    }
    return count;
}

console.log(Length(Linked));

/**
- Time complexity: O(n)
- Space complexity: O(1)
*/