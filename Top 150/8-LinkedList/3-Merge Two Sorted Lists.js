/**Merge Two Sorted Lists
 * 
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 1 → 2 → 4
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

// 1 → 3 → 4
let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);



var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(), temp = dummy;

    let p1 = list1, p2 = list2;

    while (p1 !== null && p2 !== null) {
        if (p1.val < p2.val) {
            temp.next = new ListNode(p1.val);
            p1 = p1.next;
        }
        else if (p2.val < p1.val) {
            temp.next = new ListNode(p2.val);
            p2 = p2.next;
        }
        else {
            temp.next = new ListNode(p1.val);
            p2 = p2.next;
        }
        temp = temp.next;
    }

    while (p1 !== null) {
        temp.next = new ListNode(p1.val);
        p1 = p1.next;
        temp = temp.next;
    }

    while (p2 !== null) {
        temp.next = new ListNode(p2.val);
        p2 = p2.next;
        temp = temp.next;
    }

    return dummy.next;
};


var optimize = function (list1, list2) {
    let dummy = new ListNode(), temp = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        }
        else if (list1.val > list2.val) {
            temp.next = list2;
            list2 = list2.next;
        }
        else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;;
    }

    if (list1 !== null) temp.next = list1;
    if (list2 !== null) temp.next = list2;

    return dummy.next;
}


console.log(optimize(list1, list2));


/**
Time Complexity:  O(n + m)
Space Complexity: O(1)
 */