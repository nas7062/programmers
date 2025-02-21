function solution(s) {
    if(s.length!==4 && s.length !==6)
        return false;
    let len =[...s].filter((item,idx)=>!(Number.isNaN(Number(item)))).length;
    return len !==s.length  ? false : true;
}