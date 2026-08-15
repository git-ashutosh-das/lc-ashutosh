/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    let last = strs[strs.length-1];
    let first = strs[0];
    let ans='';
    for(let i=0 ; i< last.length && i< first.length; i++){
        if(first[i]== last[i]) ans = ans + first[i]
        else break
    }
    return ans
};