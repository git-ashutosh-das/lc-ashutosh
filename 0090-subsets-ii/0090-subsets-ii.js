/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=> a-b)
    let ans = []
    let set = []
    function generate( index  ){
        ans.push([...set])
        if( index > nums.length -1) return
        for( let j = index; j< nums.length; j++){
            if( j > index && nums[j] == nums[j-1]) continue;
            set.push(nums[j]);
            generate(j+1);
            set.pop()
        }
    }
    generate(0);
    return ans
};