class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return "";
        }

        const neededCount = new Map();
        for (const char of t) {
            neededCount.set(char, (neededCount.get(char) || 0) + 1);
        }

        const windowCount = new Map();
        const totalUnique = neededCount.size;
        let uniqueSatisfied = 0;

        let left = 0;
        let shortestLength = Infinity;
        let shortestStart = 0;

        for (let right = 0; right < s.length; right++) {
            const addedChar = s[right];
            windowCount.set(addedChar, (windowCount.get(addedChar) || 0) + 1);

            if (
                neededCount.has(addedChar) &&
                windowCount.get(addedChar) === neededCount.get(addedChar)
            ) {
                uniqueSatisfied++;
            }

            while (uniqueSatisfied === totalUnique) {
                const currentLength = right - left + 1;

                if (currentLength < shortestLength) {
                    shortestLength = currentLength;
                    shortestStart = left;
                }

                const removedChar = s[left];
                windowCount.set(removedChar, windowCount.get(removedChar) - 1);

                if (
                    neededCount.has(removedChar) &&
                    windowCount.get(removedChar) < neededCount.get(removedChar)
                ) {
                    uniqueSatisfied--;
                }
                left++;
            }
        }

        return shortestLength === Infinity
            ? ""
            : s.slice(shortestStart, shortestStart + shortestLength);
    }
}
