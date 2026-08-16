/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = new Array(n+1).fill(Infinity);// min sq to make ith amount
    // dp[i] represent the number of perfect squre for sum i 
    dp[0] = 0; // minimum squares needed to make sum 0
    for(let i= 1; i<= n; i++){
        for(let j = 1 ; j*j <= i; j++ ){
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1 )
        }
    }
    console.log(dp)
    return dp[n]
};