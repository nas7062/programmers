function solution(n) {
    var answer = 0;
    let onecnt = n.toString(2).split('').filter((item)=>item ==='1').length;
    for(let i =n+1;i<=1000000;i++) {
        let cnt = i.toString(2).split('').filter((item)=>item==='1').length;
        if(onecnt === cnt) {
            return i;
        }
    }
   
    return answer;
}