function solution(s){
    let pnum = 0;
    let ynum =0;
    s =s.toUpperCase();
    for(let c of s) {
        if(c ==='Y') {
            ynum++;
        }
        else if(c ==="P")
            pnum++;
    }
    return ynum !== pnum ? false : true ;
}