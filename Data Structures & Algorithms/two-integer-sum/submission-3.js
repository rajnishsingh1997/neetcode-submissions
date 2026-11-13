class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const pairs = nums.map((val, idx) => [val, idx]);
    pairs.sort((a, b) => a[0] - b[0]);   // sort by value

    let i = 0;
    let j = pairs.length - 1;

    while (i < j) {
        const sum = pairs[i][0] + pairs[j][0];

        if (sum < target) {
            i++;
        } else if (sum > target) {
            j--;
        } else {
            return [pairs[i][1], pairs[j][1]];
        }
    }
    }
}
