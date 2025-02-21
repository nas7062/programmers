function solution(sizes) {
    sizes =sizes.map((item)=>item.sort((a,b)=>a-b));
    let w =0;
    let h= 0;
    sizes.forEach((item)=> {
        w = Math.max(item[0],w);
        h = Math.max(item[1],h);
    })
    return w*h;
}