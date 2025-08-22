// extract the last digit of a number

let num = 12345;

arr = [];

while(num > 0){
    //get the last digit
    arr.push(num % 10);

    //remove the last digit
    num = Math.floor(num / 10);
}

console.log(arr);
