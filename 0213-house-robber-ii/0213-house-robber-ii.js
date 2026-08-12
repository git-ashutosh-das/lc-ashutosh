/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 0) return 0;
    if (nums.length <= 1) return nums[0];

    // dp starts from 1st number to end-1 array, to avoid cycle last number cannot be used
    function dphelper(start, end) {
        let dpsize = end - start + 1
        let dp = new Array(dpsize).fill(0);
        dp[0] = 0;
        dp[1] = nums[start];
        
        dp[2] = nums[start + 1] || 0
        for (let i = 3; i <= dpsize ; i++) {
            let current = nums[start + i - 1 ]
            dp[i] = Math.max( current, current+ dp[i - 2], current + dp[i - 3])
        }
        //console.log(dp)
        return Math.max(...dp)
    }
    let case1 = dphelper(0, nums.length - 2 )
    let case2 = dphelper(1, nums.length - 1 )

    return Math.max(case1, case2)
};