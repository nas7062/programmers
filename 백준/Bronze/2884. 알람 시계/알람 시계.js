const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let h =input[0];
let m =input[1];


const Clock = (h,m) =>{
    if(h ===0) {
        if(m <45) {
            h=23;
            m = m+15;
        }
        else {
            m = m-45;
        }
    }
    else {
        if(m <45) {
            h-=1;
            m = m+15;
        }
        else {
            m = m-45;
        }
    }
    
    console.log(h,m);
}

Clock(h,m);

