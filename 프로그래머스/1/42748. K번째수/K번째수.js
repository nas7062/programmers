function solution(array, commands) {
    var answer = [];
    commands.forEach((c)=> {
        let arr =array.slice(c[0]-1,c[1]);// c[0]부터 c[1]까지 자르고
        arr =arr.sort((a,b)=>a-b); // 오름차순 정렬
        answer.push(arr[c[2]-1]); // c[2] 번째 숫자 push 
    })
    return answer;
}