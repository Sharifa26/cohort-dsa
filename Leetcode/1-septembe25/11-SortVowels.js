/**
2785. Sort Vowels in a String

Example 1:

Input: s = "lEetcOde"
Output: "lEOtcede"
Explanation: 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants. The vowels are sorted according to their ASCII values, and the consonants remain in the same places.
Example 2:

Input: s = "lYmpH"
Output: "lYmpH"
Explanation: There are no vowels in s (all characters in s are consonants), so we return "lYmpH".
 */

const sortVowels = (s)=>{
    //Vowels set
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const vowels = [];

    //finding the vowels in the string
    for(let ch of s){
        if(vowelsSet.has(ch)){
            vowels.push(ch);
        }
    }
    
    //sorting the vowels. 
    vowels.sort();

    let result ="";
    let index = 0

    for(let ch of s){
        if (vowelsSet.has(ch)){
            result += vowels[index];
            index++;
        }
        else{
            result += ch;
        }
    }

    return result;
}


console.log(sortVowels('ShArifa'));
