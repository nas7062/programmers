function solution(s) {
    var answer = 0;
    let arr =[];    
    s.split(" ").forEach((item)=> {
        if(item ==="Z") 
            arr.pop();
        
        else 
            arr.push(item);
});
    return arr.reduce((a,b)=>a + Number(b),0);
}