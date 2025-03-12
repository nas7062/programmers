function solution(clothes) {
    var answer = 1;
    let cloth ={};
    clothes.forEach((c)=> {
        const [name,cate] =c;
        if(cloth.hasOwnProperty(cate)) {
            cloth[cate]+=1;
        }
        else
            cloth[cate]= 1;
})
    for(let key in cloth) {
        answer*=(cloth[key]+1);
    }
    return answer-1;
}