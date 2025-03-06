function solution(brown, yellow) {
    var answer = [];
    let x =0;
    let y =0;
    for(y=3;y<=(brown+yellow)/y;y++) {
        x= Math.floor((brown+yellow)/y);
        if((x-2)*(y-2)===yellow)
            break;
    }
    return [x,y];
}