const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let h = +input[0].split(' ')[0];
let m = +input[0].split(' ')[1];
let num = +input[1];


const Clock = (h, m) => {
    while(num) {
        m++;
        num--;
        if(h ===23) {
            if(m===60) {
                h =0;
                m =0;
            }
        }
        else {
            if(m===60) {
                h+=1;
                m =0;
            }
        }
    }

    console.log(h, m);
}

Clock(h, m);

