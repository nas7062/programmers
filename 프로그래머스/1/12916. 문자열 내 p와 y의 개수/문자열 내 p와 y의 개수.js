function solution(s){
    let pnum =0;
    let ynum=0;
    [...s].forEach((ar)=> {
        if(ar ==='P' || ar==='p' )
            pnum++;
        else if (ar ==='y' || ar==='Y')
            ynum++;
    })
    return pnum === ynum ? true : false;
}