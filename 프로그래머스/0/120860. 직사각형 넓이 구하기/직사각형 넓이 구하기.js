function solution(dots) {
    let minX = 256 ,maxX =-256, minY =256,maxY =-256; // 최대 최소 설정
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
    return (maxX-minX) *(maxY-minY); // 정사각형 넓이 공식 
}