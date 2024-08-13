var twoSum = function (nums, target) {
    let ans;
    for (i = 0; i < nums.length; i++) {
        for (j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                ans = [i, j];
                return ans;
            }
        }
    }
};