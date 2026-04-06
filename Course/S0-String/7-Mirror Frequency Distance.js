/**
 * Mirror Frequency DistanceMirror Frequency Distance
 * You are given a string s consisting of lowercase English letters and digits.

For each character, its mirror character is defined by reversing the order of its character set:

For letters, the mirror of a character is the letter at the same position from the end of the alphabet.
For example, the mirror of 'a' is 'z', and the mirror of 'b' is 'y', and so on.
For digits, the mirror of a character is the digit at the same position from the end of the range '0' to '9'.
For example, the mirror of '0' is '9', and the mirror of '1' is '8', and so on.
For each unique character c in the string:

Let m be its mirror character.
Let freq(x) denote the number of times character x appears in the string.
Compute the absolute difference between their frequencies, defined as: |freq(c) - freq(m)|
The mirror pairs (c, m) and (m, c) are the same and must be counted only once.

Return an integer denoting the total sum of these values over all such distinct mirror pairs.

 

Example 1:

Input: s = "ab1z9"

Output: 3

Explanation:

For every mirror pair:

c	m	freq(c)	freq(m)	|freq(c) - freq(m)|
a	z	1	1	0
b	y	1	0	1
1	8	1	0	1
9	0	1	0	1
Thus, the answer is 0 + 1 + 1 + 1 = 3.

Example 2:

Input: s = "4m7n"

Output: 2

Explanation:

c	m	freq(c)	freq(m)	|freq(c) - freq(m)|
4	5	1	0	1
m	n	1	1	0
7	2	1	0	1
Thus, the answer is 1 + 0 + 1 = 2.​​​​​​​

Example 3:

Input: s = "byby"

Output: 0

Explanation:

c	m	freq(c)	freq(m)	|freq(c) - freq(m)|
b	y	2	2	0
Thus, the answer is 0.

 

Constraints:

1 <= s.length <= 5 * 105
s consists only of lowercase English letters and digits.
 */


// My code not Working properly.
let Alpha = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'];

let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function mirror(s) {

    let mapC = new Map();
    let mapM = new Map();

    for (let i = 0; i < s.length; i++) {
        if (Alpha.includes(s[i])) {
            mapC.set(s[i], (mapC.get(s[i]) || 0) + 1);
            let index = Alpha.indexOf(s[i]);

            let mirror = Alpha[Alpha.length - 1 - index];

            if (!mapM.has(s[i])) {
                mapM.set(mirror, (mapM.get(mirror) || 0) + 1);
            }
        }
        else {
            mapC.set(s[i], (mapC.get(s[i]) || 0) + 1);
            let index = num.indexOf(s[i]);
            let mirror = num[num.length - 1 - index];

            if (!mapM.has(s[i])) {
                mapM.set(mirror, (mapM.get(mirror) || 0) + 1);
            }
        }
    }

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        let c = mapC.get(s[i]);
        let m = mapM.get(s[i]) || 0;
        sum += Math.abs(c - m);
    }

    return sum;
}

// let s = "ab1z9";
// console.log(mirror(s));

/**
 * Time complexity: O(n)
 * space complexity: O(n)
*/


function better(s) {
    let map = new Map();

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    let sum = 0;

    let visited = new Set();

    for (let ch of map.keys()) {

        if (visited.has(ch)) continue;
        let mirror;
        if (ch >= 'a' && ch <= 'z') {
            mirror = String.fromCharCode(
                'z'.charCodeAt(0) - (ch.charCodeAt(0) - 'a'.charCodeAt(0))
            );
        }
        else {
            mirror = String.fromCharCode(
                '9'.charCodeAt(0) - (ch.charCodeAt(0) - '0'.charCodeAt(0))
            );
        }

        let c = map.get(ch);
        let m = map.get(mirror) || 0;

        sum += Math.abs(c - m);
        visited.add(ch);
        visited.add(mirror);
    }

    return sum;
}


// let s = "363";
// console.log(better(s));

/**
 * Time complexity: O(n)
 * space complexity: O(n)
*/


function optimal(s) {
    let counts = new Array(128).fill(0);

    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i)]++;
    }

    let total = 0;

    for (let i = 0; i < 13; i++) {
        let freqC = counts[97 + i];
        let freqM = counts[122 - i];

        total += Math.abs(freqC - freqM);
    }

    for (let i = 0; i < 5; i++) {
        let freqC = counts[48 + i];
        let freqM = counts[57 - i];
        total += Math.abs(freqC - freqM);
    }

    return total;
}

let s = "363";
console.log(optimal(s));

/**
 * Time complexity: O(n)
 * space complexity: O(1)
 */