/**
 * @param {string[]} strs
 * @return {string}
 */
/*
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
}; */
var longestCommonPrefix = function (strs) {
    let first = strs[0];
    let ans = '';
    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (!(strs[j][i] == strs[j - 1][i])) {
                return ans;
            }
        }
        ans = ans+(first[i])
    }
    return ans
};