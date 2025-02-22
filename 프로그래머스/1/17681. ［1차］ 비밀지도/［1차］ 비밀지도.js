function solution(n, arr1, arr2) {
    var answer = [];
    let arr =[]
    for(let i =0;i<arr1.length;i++) {
        let result ='';
        let a1 = arr1[i].toString(2);
        let a2 = arr2[i].toString(2);
        let sum = (Number(a1)+Number(a2)).toString();
        if(sum.length < n) {
            for(let j =0;j<n-sum.length;j++)
                result+='0';
        }
        result+=sum;
        console.log(result);
        arr.push(result);
    }
    return arr.map((item)=>item.split('').map((item)=>item > 0 ? '#' : ' ').join(''));
}