function solution(arr)
{
    return arr.filter((ar,i)=> ar!== arr[i+1]);
}