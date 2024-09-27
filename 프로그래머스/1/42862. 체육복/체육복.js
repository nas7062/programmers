function solution(n, lost, reserve) {
    var answer = 0;
    var arr =new Array(n).fill(1);
    for(let re of reserve)
    {
        arr[re-1]++;
    }
    for(let lo of lost)
        {
            arr[lo-1]--;
        }
    for(let i =0;i<arr.length+1;i++)
        {
            if(arr[i]===0)
                {
                    if(arr[i+1]===2)
                        {
                            arr[i+1]=1;
                            arr[i]=1;
                        }
                    if(arr[i+1]===1)
                        continue;
                }
            if(arr[i]===2)
                {
                    if(arr[i+1]===0)
                    {
                        arr[i]=1;
                        arr[i+1]=1;
                    }
                }
            
        }
    return arr.filter((item)=>item>=1).length;
}