function solution(nums) {
    var answer = 0;
    var n = Math.floor(nums.length/2);
    var arr= nums.filter((item,idx)=>nums.indexOf(item) ===idx);
    return arr.filter((item,idx)=>idx <n).length;
}