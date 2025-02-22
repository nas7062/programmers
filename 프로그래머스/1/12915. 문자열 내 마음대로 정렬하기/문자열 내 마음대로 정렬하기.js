function solution(strings, n) {
    strings.sort((a,b)=> { // strings 배열 끼리의 비교 
        if(a[n]>b[n]) return 1;  // 먼저 a[n] 번째 끼리의 비교  
        if(a[n]<b[n]) return -1; 
        if(a[n]===b[n]) { // 같다면 사전순으로 정렬
            if(a>b) return 1;
            if(a<b) return -1;
         return 0;
        }
    });
    return strings;
}