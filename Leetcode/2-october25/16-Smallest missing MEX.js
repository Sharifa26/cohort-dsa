

function smallestMissingMEX(nums,value) {
    const n = nums.length;
    let arr = new Array();
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(nums[i] % value));
    }
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    for (let i = 0; i <= n; i++) {
        if(!map.has(i % value) || map.get(i % value) == 0) {
            return i;
        }
    }
}


console.log(smallestMissingMEX([1,-10,7,13,6,8],5));