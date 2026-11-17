class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let output = new Array(n);

        // Pass 1: left products
        let left = 1;
        for (let i = 0; i < n; i++) {
            output[i] = left;
            left = left * nums[i];
        }

        // Pass 2: right products
        let right = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] = output[i] * right;
            right = right * nums[i];
        }

        return output;
    }
}
