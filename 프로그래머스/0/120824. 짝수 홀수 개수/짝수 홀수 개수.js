function solution(num_list) {
    var answer = [];
    let hol = 0;
    let zzak = 0;
    num_list.forEach((item)=> {
        if(item%2===0) {
            hol++;
        }
        else{
            zzak++;
        }
    })
    return [hol,zzak];
}