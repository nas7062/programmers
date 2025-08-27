function solution(arr)
{
    var answer = [];
    arr =arr.filter((item,idx)=>item !==arr[idx+1]);
    return arr;
}