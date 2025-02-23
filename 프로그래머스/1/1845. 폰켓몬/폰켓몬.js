function solution(nums) {
    let n =Math.floor(nums.length/2);
    let set = [...new Set(nums)];
    if(set.length >=n)
        return n;
    else
        return set.length;
}