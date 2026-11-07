class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
 const n = nums.length;
    const left = new Array(n).fill(1);    // left[0] = 1 already
    const right = new Array(n).fill(1);   // right[n-1] = 1 already
    const answer = new Array(n);

    // fill left, start at 1 because left[0] is done
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    // fill right, start at n-2 because right[n-1] is done
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    // combine
    for (let i = 0; i < n; i++) {
        answer[i] = left[i] * right[i];
    }
    return answer;
    }
}
