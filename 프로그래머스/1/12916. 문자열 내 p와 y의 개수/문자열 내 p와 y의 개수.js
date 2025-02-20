function solution(s){
    let lArr=[...s].map((item)=>item.toLowerCase());
    let pLen = lArr.filter((item)=>item ==='p').length;
    let yLen = lArr.filter((item)=>item ==='y').length;
    return pLen ===yLen ? true :false;
}