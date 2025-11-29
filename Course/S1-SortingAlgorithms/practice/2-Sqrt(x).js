/**
 * Sqrt(x)
 * 
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
 */


var mySqrt = function (x) {
    let start = 0, end = x;
    let ans = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let square = mid * mid;

        if (square == x) {
            return mid;
        }
        else if(square < x){
            start = mid+1;
            ans = mid;
        }
        else{
            end = mid -1;
        }
    }

    return ans
};


let x = 86;

console.log(mySqrt(x));


/**
 - Time complexity: O(log n)
 - Space complexity: O(1)
*/