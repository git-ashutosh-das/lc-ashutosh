/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if( intervals.length == 0) {
        intervals.push(newInterval)
        return intervals;
    }
    let newincluded = []
    let flag = false
    for(let interval of intervals){
        if( newInterval[0] <= interval[0] && !flag){
            newincluded.push(newInterval)
            flag = true;
        }
        newincluded.push(interval)
    }
    if (flag == false) newincluded.push(newInterval)
    // console.log(newincluded)
    let ans = [newincluded[0]];
    for(let i=1; i< newincluded.length; i++){
        let prevend = ans[ans.length-1][1]
        let newint = newincluded[i];
        let newstart = newint[0];
        let newend = newint[1];

        if(prevend >= newstart){
            let end = prevend > newend ? prevend : newend
            ans[ans.length-1][1] = end
        }else{
            ans.push(newincluded[i])
        }
    }
   
    return ans
};