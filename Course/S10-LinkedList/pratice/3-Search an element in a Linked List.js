/**
 * Search an element in a Linked List
 * 
 * 
Problem Statement: Given the head of a linked list and an integer value, find out whether the integer is present in the linked list or not. Return true if it is present, or else return false.

Example:1

Input: 0->1->2, val = 2
Output: True
Explanation: Since element 2 is present in the list, return true.

Example:2

Input: 12->5->8->7, val = 6 
Output: False
Explanation: The list does not contain element 6. Therefore, return false.
 */


function list(val, next) {
    this.val = (val == undefined) ? 0 : val;
    this.next = (next == undefined) ? null : next;
}


let Linked = new list(12);
Linked.next = new list(5);
Linked.next.next = new list(8);
Linked.next.next.next = new list(7);


function Search(node, list) {
    let current = list;

    while (current !== null) {
        if (current.val == node) return true;

        current = current.next;
    }

    return false;
}

console.log(Search(7, Linked));


/**
- Time complexity: O(n)
- Space complexity: O(1)
 */