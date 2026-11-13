class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const set = new Set();
        let low = 0;

        for (let high = 0; high < nums.length; high++) {
            if (high - low > k) {
                set.delete(nums[low]);
                low++;
            }

            if (set.has(nums[high])) {
                return true;
            }
            set.add(nums[high]);
        }
        return false;
    }
}
