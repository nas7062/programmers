const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split('\n');
let [n,...arr] = input;


for(let i=0;i<n;i++) {
  let result = Array.from({length:4}).fill(0);
  while(arr[i]) {
    if(arr[i]>=25) {
      arr[i]-=25;
      result[0]++;
    }
    else if(arr[i]>=10) {
      arr[i]-=10;
      result[1]++;
    }
    else if(arr[i]>=5) {
      arr[i]-=5;
      result[2]++;
    }
    else {
      arr[i]--;
      result[3]++;
    }
  }
  console.log(result.join(' '));
}
