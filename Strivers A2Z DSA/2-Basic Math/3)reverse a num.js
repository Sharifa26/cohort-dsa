/**Problem statement
Ninja is feeling very bored and wants to try something new. So, he decides to find the reverse of a given number. But he cannot do it on his own and needs your help.

Note:

If a number has trailing zeros, then its reverse will not include them. For e.g., the reverse of 10400 will be 401 instead of 00401. */

// reverse a number
let num = 12345;
let rev = 0;

while(num > 0){
    let last = num % 10;
    rev = (rev * 10) + last;
    num = Math.floor(num / 10);
}

console.log(rev);
