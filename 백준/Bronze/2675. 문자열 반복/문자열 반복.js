const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim("")
  .split("\n");
const [n,...arr] = input;
for(let i =0;i<arr.length;i++){
  const [num ,str] = arr[i].split(' ');
  let result = "";
  for(let j=0;j<str.length;j++){
      result+=str[j].repeat(num);
  }
  console.log(result);
}



