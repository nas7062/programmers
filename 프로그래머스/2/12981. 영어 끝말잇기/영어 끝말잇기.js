function solution(n, words) {
    var answer = [];
    for(let i=1;i<words.length;i++) {
        if(words[i-1].slice(-1) !== words[i][0])
            return [i%n+1,Math.floor(i/n)+1];
        
        if(words.indexOf(words[i])!==i)
            return [i%n+1 ,Math.floor(i/n)+1]
            
    }
    return [0,0];
}