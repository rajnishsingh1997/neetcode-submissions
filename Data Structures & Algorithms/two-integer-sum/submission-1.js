class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const arr = nums.map((value, index) => [value, index]);

        // numeric sort by value
        arr.sort((a, b) => a[0] - b[0]);

        let i = 0;
        let j = arr.length - 1;

        while (i < j) {
            const sum = arr[i][0] + arr[j][0];
            if (sum === target) {
                // return original indices, smaller first
                return [Math.min(arr[i][1], arr[j][1]), Math.max(arr[i][1], arr[j][1])];
            } else if (sum < target) {
                i++;
            } else {
                j--;
            }
        }
        return [];
    }
}
