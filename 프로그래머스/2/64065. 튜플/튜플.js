function solution(s) {
    var answer = [];
    let arr = s.replaceAll("{{","").replaceAll("}}","").split("},{");
    let arr2= [];
    arr.forEach((item)=> {
        arr2.push(item.split(','));
    })
    arr2.sort((a,b)=>a.length-b.length);
    
    arr2.forEach((item)=> {
        item.forEach((num)=> {
            if(!answer.includes(+num))
                answer.push(+num);
    })
})
    return answer;
}