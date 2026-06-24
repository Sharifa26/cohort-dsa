/**Minimum Window Substring
 * 
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?
 */

var minWindow = function (s, t) {
    let freqMap = new Map();

    for (let ch of t) {
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    }

    let windowStart = 0, start = 0, matched = 0;
    let minLength = Infinity;

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd];
        if (freqMap.has(rightChar)) {
            freqMap.set(rightChar, freqMap.get(rightChar) - 1);
            if (freqMap.get(rightChar) >= 0) {
                matched++;
            }
        }

        while (t.length === matched) {
            if (minLength > (windowEnd - windowStart + 1)) {
                minLength = (windowEnd - windowStart + 1);
                start = windowStart;
            }

            let leftChar = s[windowStart];
            windowStart++;

            if (freqMap.has(leftChar)) {
                if (freqMap.get(leftChar) == 0) matched -= 1;
                freqMap.set(leftChar, freqMap.get(leftChar) + 1);
            }
        } 
    }

    return minLength === Infinity ? "" : s.substring(start, start + minLength);
};

let s = "ab", t = "a";

console.log(minWindow(s, t));





