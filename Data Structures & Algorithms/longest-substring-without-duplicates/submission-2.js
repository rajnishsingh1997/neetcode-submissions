class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charArray = s.split("");
        let low = 0;
        let res = 0;
        let map = new Map();

        for (let high = 0; high < charArray.length; high++) {
            const ch = charArray[high];
            if (map.has(ch)) {
                map.set(ch, map.get(ch) + 1);
            } else {
                map.set(ch, 1);
            }

            while (map.get(ch) > 1) {
                map.set(charArray[low], map.get(charArray[low]) - 1);
                low = low + 1;
            }
            res = Math.max(res, high - low + 1);
        }
        return res;
    }
}
