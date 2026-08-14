/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;

    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
    //dp[i][j] means largest common subbarr until i-1 in  nums1 , j-1 in nums2 
    // [1,2,3,2,1]
    // [3,2,1,4,7]
    // dp [i][j] = dp[i-1][j-1] + 1 // if nums[i-1] and nums[j-1] are equal

    let max = 0
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1 // dp of length 1 arr would be longest common array of length 1, that is char 0 elems if they are equal mean len == 1
                max = Math.max(dp[i][j], max)
            }
        }
    }
    return max
};