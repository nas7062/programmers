function solution(arr1, arr2) {
    var answer = [];
    for(let i =0;i<arr1.length;i++) {
        let arr =[];
        let sum =0;
        for(let j =0; j<arr1[i].length;j++) {
            sum = arr1[i][j]+ arr2[i][j];
            arr.push(sum);
        }
        answer.push(arr)
    }
    return answer;
}