var searchInsert = function (nums, target) {
    let idx = nums.indexOf(target);

    if (idx === -1) {
        for (let i = 0; i <= nums.length; i++) {
            const n = nums[i];
            idx = i;

            if (n > target && i >= nums.length) return idx + 1;

            if (n > target) return idx;
        }
    }
    return idx;
};