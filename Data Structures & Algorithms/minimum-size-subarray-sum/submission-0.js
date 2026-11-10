class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let low = 0;
        let high = 0;
        let res = Infinity;
        let sum = 0;

        while (high < nums.length) {
            sum = sum + nums[high];
            while (sum >= target) {
                let len = high - low + 1;
                res = Math.min(res, len);
                sum = sum - nums[low];
                low++;
            }
            high++;
        }
        return res === Infinity ? 0 : res;
    }
}
