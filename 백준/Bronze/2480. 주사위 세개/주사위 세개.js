const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let a = input[0];
let b = input[1];
let c = input[2];


const RandomDice = (a, b, c) => {
    
    if(a === b && b ===c) {
        console.log(10000+ (b*1000));
    }
    else if(a===b &&  b!==c) {
        console.log(1000 +(a*100));
    }
    else if(a===c &&  a!==b) {
        console.log(1000 +(a*100));
    }
    else if(b===c &&  b!==a) {
        console.log(1000 +(b*100));
    }
    else if(a!==b && b !==c){
        let max = Math.max(a,b,c);
        console.log(max*100);
    }

    
}

RandomDice(a,b,c);

