function solution(sizes) {
    var answer = 0;
    let max1= 0;
    let max2= 0;
    sizes.forEach((size)=>  {
        size = size.sort((a,b)=>a-b);
        console.log(size)
        max1 = Math.max(max1,size[0]);
        max2= Math.max(max2,size[1]);
    });
    return max1 * max2;
}