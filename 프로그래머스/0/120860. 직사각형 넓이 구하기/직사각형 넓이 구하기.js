function solution(dots) {
    var answer = 0;
    let minX = 256;
    let maxX = -256;
    let minY = 256;
    let maxY = -256;
    dots.forEach((item)=> {
        if(minX > item[0])
            minX =item[0];
        if(maxX < item[0])
            maxX = item[0];
        if(minY > item[1])
            minY =item[1];
        if(maxY < item[1])
            maxY = item[1];
    })
    return (maxX-minX) *(maxY-minY);
}