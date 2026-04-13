/**Odd Even Linked List
 * 
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:


Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
 

Constraints:

The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106
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
LinkedList.next.next.next.next.next.next = new linked(7);
LinkedList.next.next.next.next.next.next.next = new linked(8);
LinkedList.next.next.next.next.next.next.next.next = new linked(9);

var bruteForce = function (head) {
    if (head == null || head.next == null) return head;
    let temp = head;
    let arr = [];
    while (temp !== null && temp.next !== null) {
        arr.push(temp.val);
        temp = temp.next.next;
    }
    if (temp !== null) arr.push(temp.val);
    temp = head.next;
    while (temp !== null && temp.next !== null) {
        arr.push(temp.val);
        temp = temp.next.next;
    }
    if (temp !== null) arr.push(temp.val);

    temp = head;
    let i = 0;
    while (temp !== null) {
        temp.val = arr[i];
        temp = temp.next;
        i++;
    }

    return head
}

//console.log(bruteForce(LinkedList));


/**
- Time complexity: O(N)
- Space complexity: O(N)
 */



var optimal = function (head) {
    if (head == null || head.next == null) return head;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while (even !== null && even.next !== null) {

        odd.next = odd.next.next;
        even.next = even.next.next;

        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;

    return head;
}

console.log(optimal(LinkedList));

/**
- Time complexity: O(N)
- Space complexity: O(1)
 */
