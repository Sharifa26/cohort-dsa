/**
 * Ransom NoteRansom Note
 * 
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 */

var canConstruct = function (ransomNote, magazine) {

    if (ransomNote.length > magazine.length) return false;

    let arr = new Array(26).fill(0);

    for (let ch of ransomNote) {
        let char = ch.charCodeAt(0) - 97;
        arr[char]++;
    }

    for(let ch of magazine){
        let char = ch.charCodeAt(0) - 97;
        arr[char]--;
    }

    for(let i=0;i<26;i++){
        if(arr[i] > 0) return false;
    }

    return true
};

let ransomNote = "aa", magazine = "ab";

console.log(canConstruct(ransomNote, magazine));


/**
 * time complexity : O(n + m)
 * space complexity : O(1)
 */