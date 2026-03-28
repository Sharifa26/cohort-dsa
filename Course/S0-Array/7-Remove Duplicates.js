/**Remove Duplicates in-place from Sorted Array
 * 
 * Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.

Examples
Input: arr[]=[1,1,2,2,2,3,3]
Output: [1,2,3,_,_,_,_]
Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.

Input: arr[]=[1,1,1,2,2,3,3,3,3,4,4]
Output: [1,2,3,4,_,_,_,_,_,_,_]
Explanation: Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array.
 */

function bruteForce(arr) {
    let set = new Set(arr);//O(n)

    let mySet = [...set];//O(n)

    for (let i = 0; i < mySet.length; i++) {//O(n)
        arr[i] = mySet[i];
    }
    return arr;
}

let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];

//console.log(bruteForce(arr));

/**
- Time complexity: O(n)
- Space complexity: O(n)
 */


function betterApproach(nums) {
    let set = new Set();//O(1)

    let index = 0;

    for (let num of nums) {//O(n)
        if (!set.has(num)) {
            set.add(num);

            nums[index] = num;
            index++;
        }
    }
    return index;
}

//console.log(betterApproach(arr));

/**
- Time complexity: O(n)
- Space complexity: O(n)
 */

function optimaize(nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[index]) {
            index++;
            nums[index] = nums[i];
        }
    }
    console.log(nums);

    return index + 1;
}

console.log(optimaize(arr));

/**
- Time complexity: O(n)
- Space complexity: O(1)
 */