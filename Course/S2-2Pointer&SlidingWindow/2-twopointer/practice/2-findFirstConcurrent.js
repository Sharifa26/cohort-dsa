/**
 * Find the Index of the First Occurrence in a String
 * 
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 */

/** My Approach */ /** Not Working  */
var strStr = function (haystack, needle) {
    let newMap = new Map();

    for (let i = 0; i < needle.length; i++) {
        let curr = needle[i];
        newMap.set(curr, (newMap.get(curr) || 0) + 1);
    }

    let matched = 0;
    let left = 0, el = 0, right = haystack.length - 1;

    while (el < right) {
        let curr = haystack[el];

        if (newMap.has(curr)) {
            matched++;
        }
        if (matched == needle.length) {
            console.log(haystack.slice(left, el + 1));

            if (haystack.slice(left, el + 1) == needle) {
                return left;
            } else {
                left = el + 1;
                matched = 0;
            }
        }
        if(el-left == needle.length-1){
            left = el+1;
        }
        el++;
    }

    return -1;
};


/** Chatgpt Solution */

function Solution(haystack,needle){
    if(needle == '') return 0;

    for(let i=0;i<haystack.length - needle.length;i++){
        if(haystack.slice(i,i+needle.length) == needle) return i;
    }

    return -1;
}

/**
 * Time Complexity : O(n) + O(m)
 *                   = O(n*m)
 * 
 * Sapce Complexity : O(1)
 */


/** Sliding Window */

var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;

        while (j < m && haystack[i + j] === needle[j]) {
            j++;
        }

        if (j === m) return i;
    }

    return -1;
};

/**
 * Time Complexity : O(n - m) + O(m)
 *                   = O(n - m + m)
 *                   = O(n)
 * 
 * Sapce Complexity : O(1)
 */


let haystack = "leetcode", needle = "leeto";
console.log(Solution(haystack, needle));
