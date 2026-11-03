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
            let minHeights = Math.min(heights[i], heights[j]);
            let width = j - i;

            maxArea = Math.max(maxArea, minHeights * width);

            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }
        return maxArea;
    }
}
