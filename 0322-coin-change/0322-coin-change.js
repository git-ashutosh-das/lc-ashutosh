/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 /**
 //backtracking TLE's due to large complexicty O(coins.length^(amount/lowest val of coins))
var coinChange = function (coins, amount) {
    coins.sort((a, b) => b-a)
    let ans = Infinity;
    function change(index, target, count, comb) {
        if (count >= ans) return;
        if (target == amount) {
            ans = Math.min(ans, count)
            //console.log('ans',ans, 'c',count)
            return
        }
        if (target > amount) {
            return
        }
        for (let i = index; i < coins.length; i++) {
            target = target + coins[i];
            comb.push(coins[i])
            //console.log('""idx',index,'i',i,'cb',comb,'count', count+1, 'tgt',target,'""')
            change(i, target, count + 1, comb);
            target = target - coins[i]
            comb.pop()
        }
    }
    change(0, 0, 0, [])
    return ans == Infinity ? -1 : ans
};
*/
// bottom up dp , 1 - n 
// top down dp, n - 1

// this is bottom up dp
var coinChange = function (coins, amount) {
    let dpx = new Array( amount + 1).fill(Infinity);
    dpx[0] = 0;
    for( let i = 1; i<= amount; i++){
        for( let x = 0; x< coins.length; x++){
            if( i - coins[x] < 0 ) continue
            dpx[i] = Math.min((1 + dpx[i - coins[x]]), dpx[i])
        }
    }
    //console.log(dpx)
    return dpx[amount] == Infinity ? -1 : dpx[amount]
}