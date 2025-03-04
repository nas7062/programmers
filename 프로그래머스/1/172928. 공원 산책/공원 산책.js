function solution(park, routes) {
    var answer = [];
    let N = park.length;
    let M = park[0].length;
    let char=[0,0];
    for(let i =0;i<N;i++) {
        for(let j =0;j<M;j++) {
            if(park[i][j]==="S")
                char = [i,j];
        }
    }
    const direction = {
        E:[0,1],
        W:[0,-1],
        S:[1,0],
        N:[-1,0]
    }
    for(let route of routes) {
        let [dir,n]= route.split(' ');
        let num = Number(n);
        let [nx,ny] = char;
        let step=0;
        while(step <num) {
            nx += direction[dir][0];
            ny += direction[dir][1];
      if (nx < 0 || N <= nx || ny < 0 || M <= ny || park[nx][ny] === "X") break;
            step++;
        }
        if (step === num) char = [nx, ny];
    }
    return char;
}