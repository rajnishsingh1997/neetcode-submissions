class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charSet = new Set(s);
        let res = 0;
        for (const c of charSet) {
            let low = 0;

            let count = 0;

            for (let high = 0; high < s.length; high++) {
                if (s[high] == c) {
                    count++;
                }

                while (high - low + 1 - count > k) {
                    if (s[low] == c) {
                        count--;
                    }
                    low++;
                }

                res = Math.max(high - low + 1, res);
            }
        }
        return res;
    }
}
