/**
 * Armstrong number - A number is called as Armstrong number if the sum of power(no.of digits(n)) of its digits is equal to the number itself.

For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.

1634 is an Armstrong number, as 1^4 + 6^4 + 3^4 + 4^4 = 1634
 */

let n=153;

function isArmstrong(n){
    let dup=n;
    let dup2=n
    let cnt=0;
    let sum=0;
    while(n>0){
        cnt++;
        n=Math.floor(n/10);
    }
    
    while (dup >0){
        let last = dup % 10;
        sum += Math.pow(last,cnt);
        dup =Math.floor(dup /10);

    }
    return sum == dup2;
}

console.log(isArmstrong(1634));
