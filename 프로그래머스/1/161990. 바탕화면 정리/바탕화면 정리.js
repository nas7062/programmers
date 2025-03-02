function solution(wallpaper) {
    var answer = [];
    for(let i =0;i<wallpaper.length;i++) {
        for(let j =0;j<wallpaper[i].length;j++) {
            if(wallpaper[i][j]==="#")
                answer.push([i,j]);
        }
    }
    let minX =50;
    let minY=50;
    let maxX =-50;
    let maxY =-50;
    for(let i =0;i<answer.length;i++) {
        minX = Math.min(minX,answer[i][0]);
         minY = Math.min(minY,answer[i][1]);
         maxX = Math.max(minX,answer[i][0]);
         maxY = Math.max(maxY,answer[i][1]);
    }
    return [minX,minY,maxX+1,maxY+1];
}