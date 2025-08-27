function solution(arr) {
  var min = Math.min(...arr);
  var r = arr.filter((v) => v != min);
  return r.length == 0 ? [-1] : r;
 
}