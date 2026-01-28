function solution(arr) {
   let mini = Math.min(...arr);
   arr = arr.filter((ar)=> ar !==mini);
    return arr.length ? arr : [-1];
}