function solution(nums) {
    var answer = 0;
    let n = nums.length/2;
    nums = nums.sort((a,b)=>a-b).filter((item,idx)=>item !==nums[idx+1]);
    console.log(n,nums)
    if(n > nums.length) {
        return nums.length;
    }
    else 
        return n;
 
}