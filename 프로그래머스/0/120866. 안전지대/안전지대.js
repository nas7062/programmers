function solution(board) {
    var answer = 0;
    let n = board.length;
    let dx =[-1,-1,0,1,1,1,0,-1];
    let dy =[0,1,1,1,0,-1,-1,-1];
    let newBoard = board.map((item)=>item.slice());
    for(let i =0;i<n;i++) {
        for(let j =0;j<n;j++) {
            if(board[i][j]===0)
                continue;
            for(let k=0;k<8;k++) {
                let nx =i+dx[k];
                let ny =j+dy[k];
                
                if(nx >=0 && nx <n && ny>=0 &&ny <n && newBoard[nx][ny]!==1)
                    newBoard[nx][ny] =1;
            }
        }
    }
    return newBoard.flat().filter((item)=>item===0).length;
}