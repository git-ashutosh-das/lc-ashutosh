/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let heap = new MinPriorityQueue({compare : (a,b)=>{return a[0]-b[0]}})
    for(let interval of intervals){
        heap.enqueue(interval)
    }
    heap.enqueue(newInterval);
    let ans = [heap.dequeue()]

    while( heap.size() !== 0){
        let prevend = ans[ans.length-1][1];
        let newint = heap.dequeue();
        let newintstart  = newint[0];
        let newintend  = newint[1];
        console.log(ans)
        if( prevend >= newintstart ){
            let newend = newintend > prevend ? newintend : prevend
            ans[ans.length-1][1] = newend
        } else{
            ans.push(newint)
        }
    }
    return ans;
};