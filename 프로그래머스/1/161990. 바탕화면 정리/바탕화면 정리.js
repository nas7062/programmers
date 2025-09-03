function solution(wallpaper) {
    var answer = [];
    let X =[];
    let Y =[];
 wallpaper.forEach((wall,idx)=> {
        for(let i =0;i<wall.length;i++) {
          
            if(wall[i]==="#") {
               X.push(idx);
                Y.push(i);
            }
         
        }
    })
    X.sort((a,b)=>a-b);
    Y.sort((a,b)=>a-b);
    
    return [X[0],Y[0],X[X.length-1]+1,Y[Y.length-1]+1];
    
}