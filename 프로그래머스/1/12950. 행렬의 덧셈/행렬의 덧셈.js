function solution(arr1, arr2) {
    var answer = [];
    for(let i =0;i<arr1.length;i++) {
        let arr =[];
        for(let j=0;j<arr1[i].length;j++) {
            let sum=arr1[i][j]+arr2[i][j];
                arr.push(sum);
        }
        answer.push(arr);
    }
    return answer;
}