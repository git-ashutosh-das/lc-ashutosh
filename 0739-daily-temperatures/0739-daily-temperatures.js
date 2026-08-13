/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let minontop = [];
    let ans = new Array( temperatures.length)
    for(let i= temperatures.length-1;i>=0; i--){
       // console.log(minontop, '  ',ans)
        while( minontop.length !==0 && minontop[minontop.length-1][0] <= temperatures[i] ){
            minontop.pop();
        }
        if( minontop.length==0){
            ans[i] = 0;
            minontop.push([temperatures[i],i])
            continue
        }
        ans[i] = minontop[minontop.length-1][1] - i
        if( temperatures[i] < minontop[minontop.length-1][0] ){
            minontop.push([temperatures[i],i])
        }
    }
    return ans;
};