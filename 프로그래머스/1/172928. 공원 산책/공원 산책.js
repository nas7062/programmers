function solution(park, routes) {
    var answer = [];
    
    for(let i =0;i<park.length;i++) {
        for(let j=0;j<park[i].length;j++) {
            if(park[i][j] ==="S")
                answer  =[i,j]
        }
    }
  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };
    for(let route of routes) {
        let [dir,distanceStr] = route.split(' ');
        let distance = parseInt(distanceStr);
        let [nx,ny] = answer;
        let step = 0;
        while(step < distance) {
            nx +=directions[dir][0];
            ny +=directions[dir][1];
            
            if(nx >= park.length || nx <0 || ny >=park[0].length || ny < 0 || park[nx][ny] === "X")
                break;
            step++;
        }
        if (step === distance) answer = [nx, ny];
    }
    
    return answer;
}