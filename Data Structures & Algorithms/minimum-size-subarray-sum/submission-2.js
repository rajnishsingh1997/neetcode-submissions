class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let low = 0;
        let sum = 0;
        let res = Infinity;

        for (let high = 0; high < nums.length; high++) {
            sum = sum + nums[high];
            while (sum >= target) {
                res = Math.min(res, high - low + 1);
                sum = sum - nums[low];
                low = low + 1;
            }
        }
        return res === Infinity ? 0 : res;
    }
}
