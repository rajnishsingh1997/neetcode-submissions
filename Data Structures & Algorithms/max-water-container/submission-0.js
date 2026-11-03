class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;
        let maxArea = 0;
        while (i < j) {
            let width = j - i;
            let height = Math.min(heights[i], heights[j]);
            maxArea = Math.max(maxArea, width * height);
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return maxArea;
    }
}
