/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let dp = new Array(nums.length).fill(1);
    dp[nums.length - 1] = 1;
    let max = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        let j = i + 1;
        while (j < nums.length) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(1 + dp[j], dp[i]);;   
            }
            j++
            //max = Math.max(max, dp[i])
        }
    }
    //console.log(dp)
    return Math.max(...dp)
};