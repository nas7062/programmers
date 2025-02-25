function solution(n, lost, reserve) {
    var answer = 0;
    let arr = new Array(n).fill(1);
    for(let i =0;i<lost.length;i++) {
        arr[lost[i]-1]--;
    }
    for(let i =0;i<reserve.length;i++) {
        arr[reserve[i]-1]++;
    }
    for(let i =0;i<=n;i++) {
        if(arr[i]===0) {
            if(arr[i+1] ===2) {
                arr[i+1]=1;
                arr[i]=1;
            }
            if(arr[i+1]===1)
                continue;
        }
        if(arr[i]===2) {
                if(arr[i+1] ===0) {
                    arr[i+1]=1;
                    arr[i]=1;
                } 
            }
        }
    return arr.filter((item)=>item>0).length;
}