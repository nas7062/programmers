function solution(lines) {
    let arr = new Array(202).fill(0);
    lines.forEach((item)=> {
        for(let i=item[0]+100;i<item[1]+100;i++) {
            arr[i]++;
        }
})
    return arr.filter((item)=> item >1).length;
}