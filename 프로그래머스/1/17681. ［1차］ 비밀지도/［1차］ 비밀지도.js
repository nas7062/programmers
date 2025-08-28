function solution(n, arr1, arr2) {
  var answer = [];
  arr1.forEach((str, idx) => {
    // 1) 각 수를 2진 문자열로 만들고, 2) 길이를 n으로 0 채움
    let num  = str.toString(2).padStart(n, '0');
    let num2 = arr2[idx].toString(2).padStart(n, '0');

    let arr = [];
    // 3) 자리수별로 비교해서 '#' 또는 ' ' 결정
    for (let k = 0; k < n; k++) {
      if (num[k] === '1' || num2[k] === '1') {
        arr.push('#');
      } else {
        arr.push(' ');
      }
    }

    answer.push(arr.join(''));
  });

  return answer;
}