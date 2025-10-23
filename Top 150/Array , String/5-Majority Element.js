/**
 * Majority Element
 * 
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

//--> we have to count the frequency of each element in the array
//--> then check which element has frequency more than n/2
//--> return that element



//* brute force approach

var majorityElement1 = function(nums) {
    let n = nums.length;
    for(let i=0;i<nums.length;i++){
        let count =0;
        for(let j=0;j<nums.length;j++){
            if(nums[i] === nums[j]){
                count++;
            }   
        }
        if (count > Math.floor(n/2)){
            return nums[i];
        }
    }
    return -1;
}

//console.log(majorityElementOptimal1([2, 2, 1, 1, 1, 2, 2]))

/**
 * TC: O(n^2)
 * SC: O(1)
 */


//-- Better Approach
var majorityElement2 = function (nums) {
    let map = new Map();

    for (let ch of nums) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    let major = Math.floor(nums.length / 2);

    for (let [key, value] of map) {
        if (value > major) {
            return key;
        }
    }
    return -1;
}

// console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]))

/**
 * TC: O(n)
 * SC: O(n)
 */


//--> Optimal Approach (Moore's Voting Algorithms)

var majorityElement3 = function (nums){
    let count = 0;
    let el;

    for(let i=0;i<nums.length;i++){
        if(count == 0){
            count =1;
            el = nums[i];
        }
        else if(nums[i] == el ){
            count++;
        }
        else{
            count--;
        }
    }
     
    let cnt =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == el){
            cnt++;
        }
    }

    if(cnt > Math.floor(nums.length/2)){
        return el;
    }
    return -1;
}

console.log(majorityElement3([3, 3, 4]))

/**
 * TC: O(n)
 * SC: O(1)
*/
