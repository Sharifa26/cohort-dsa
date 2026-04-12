function linked(val, next) {
    this.val = (val == undefined) ? 0 : val;
    this.next = (next == undefined) ? null : next;
}

let LinkedList = new linked(1);
LinkedList.next = new linked(2);
LinkedList.next.next = new linked(3);
LinkedList.next.next.next = new linked(2);
LinkedList.next.next.next.next = new linked(1);


var reverse = function (head) {
    let dummy = null, temp = dummy;

    let current = head;

    while (current !== null) {
        temp = dummy;

        dummy = current;

        current = current.next;

        dummy.next = temp;
    }
    return dummy;
}


var palindrome = function (head) {
    let current = head;
    let temp = head;

    let reverseList = reverse(temp);

    while (current !== null) {
        if (current.val !== reverseList.val) return false;
        current = current.next;
        reverseList = reverseList.next;
    }

    return true;
}

console.log(palindrome(LinkedList));


/**
- Time complexity is linear, O(n).
- Space complexity is constant, O(1).
 */