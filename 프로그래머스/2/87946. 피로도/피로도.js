function solution(k, dungeons) {
    var answer = 0;
    let visited = new Array(dungeons.length).fill(false);
    
    const DFS = (hp,count) => {
        for(let i=0;i<dungeons.length;i++) {
            if(!visited[i] && dungeons[i][0] <=hp){
                visited[i] = true;
                DFS(hp-dungeons[i][1],count+1);
                visited[i]= false;
            } 
        }
        answer = Math.max(answer,count);
    }
    DFS(k,0);
    return answer;
}