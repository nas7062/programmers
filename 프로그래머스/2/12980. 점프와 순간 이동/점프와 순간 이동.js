function solution(n)
{   let ans = 0;
    while(n!=0) { 
        if(n%2===0)  //순간이동 가능하면 
            n/=2;
        else { // 안되면 1칸 이동 1칸이동시 건전지 사용 
            n--;
            ans++;
        }
    }

    return ans;
}