function solution(elements) {
    var answer = 0;
    let set =new Set();
    let arr =[...elements,...elements];
    let n =elements.length;
    for(let i =1; i<=n;i++) {
        for(let j=0;j<arr.length;j++) {
            let sum =arr.slice(j,j+i).reduce((a,b)=>a+b,0);
            set.add(sum);
        }
    }
    
    return set.size;
}