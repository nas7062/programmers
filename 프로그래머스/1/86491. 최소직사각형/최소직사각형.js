function solution(sizes) {
     let first = 0;
    let second = 0;
    sizes.forEach((size)=> {
        size.sort((a,b)=> a-b);
       
       first = Math.max(first,size[0]);
        
       second = Math.max(second,size[1]);
        console.log( first,second);
    })
    return first* second;
    
}