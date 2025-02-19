function solution(lines) {
    let arr = new Array(202).fill(0);
    lines.forEach((item)=> {
        for(let i=item[0]+100;i<item[1]+100;i++) { //-100부터 시작해서 100씩 + 해줌 
            arr[i]++;
        }
})
    return arr.filter((item)=> item >1).length;
}