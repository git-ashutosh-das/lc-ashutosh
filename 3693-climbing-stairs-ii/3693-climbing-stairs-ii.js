/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function(n, cost) {
    let dpcost = new Array ( n+1); // min cost to reach ith step
    dpcost[0]= 0;
    dpcost[1] = cost[1-1] + Math.pow((1-0),2);
    for( let i= 2; i<n+1; i++){
        let step1 = cost[i-1] + Math.pow(1,2) + dpcost[i-1]; // (i - (i-1))) = 1 square
        let step2 = cost[i-1] + Math.pow(2,2) + dpcost[i-2]; // (i - (i-2))) = 2 square
        let step3 = (cost[i-1] + Math.pow(3,2) + dpcost[i-3]) || Infinity; // (i - (i-3))) = 3 square
        dpcost[i] = Math.min(step1,step2,step3)
    }
    console.log(dpcost)
    return dpcost[n]
};