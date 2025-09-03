function solution(players, callings) {
    var answer = [];
    let map = new Map();
    players.forEach((player,idx)=> {
        map.set(player,idx);
    })
    callings.forEach((call)=> {
        let idx = map.get(call);
        let front = players[idx-1];
        [players[idx],players[idx-1]] = [players[idx-1],players[idx]]
        
        map.set(call,map.get(call)-1);
        map.set(front,map.get(front)+1);
    })
    return players;
}