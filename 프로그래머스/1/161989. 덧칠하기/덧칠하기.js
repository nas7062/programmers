function solution(n, m, section) {
    let arr= new Array(n).fill(1); // 
    section=section.sort((a,b)=>a-b);
    let cnt=0;
    for(let i=0;i<section.length;i++) {
        arr[section[i]-1]--;
    }
    for(let i=0;i<n;i++){
        if(arr[i] ===0) {
        for(let j =i;j<i+m;j++) {
            arr[j]++;
        }
        cnt++;
      }
    }
    return cnt;
}