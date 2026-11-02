class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortedArray = nums.sort((a, b) => a - b);

        let res = [];
        for (let i = 0; i <= sortedArray.length - 1; i++) {
            if (i > 0 && sortedArray[i] == sortedArray[i - 1]) {
                continue;
            }
            let j = i + 1;
            let k = sortedArray.length - 1;

            while (j < k) {
                let sum = sortedArray[j] + sortedArray[k] + sortedArray[i];
                if (sum == 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                    while (j < k && sortedArray[j] === sortedArray[j + 1]) j++;
                    while (j < k && sortedArray[k] === sortedArray[k - 1]) k--;
                    j++;
                    k--;
                } else if (sum > 0) {
                    k--;
                } else {
                    j++;
                }
            }
        }
        return res;
    }
}
