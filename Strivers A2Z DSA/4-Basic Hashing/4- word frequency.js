/**
 * Write a bash script to calculate the frequency of each word in a text file words.txt.

For simplicity sake, you may assume:

words.txt contains only lowercase characters and space ' ' characters.
Each word must consist of lowercase characters only.
Words are separated by one or more whitespace characters.
Example:

Assume that words.txt has the following content:

the day is sunny the the
the sunny is is
Your script should output the following, sorted by descending frequency:

the 4
is 3
sunny 2
day 1
 */

let sentence = 'the day is sunny the the the sunny is is'

function count(s){
    let newArr = s.split(' ');
    let map = new Map();
    for (let i = 0; i < newArr.length; i++) {
        if (map.has(newArr[i])) {
            map.set(newArr[i], map.get(newArr[i]) + 1);
        }
        else {
            map.set(newArr[i], 1);
        }
    }
    map.forEach((key, value) => {
        console.log(`${value}  ${key}`);
    });
    
}

console.log(count(sentence));

//Time complexity and space
/** TC == N+N 
 *      = 2N
 *      = O(N)
 * 
 *  SC == O(N) 
*/