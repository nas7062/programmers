function solution(nums) {
    var answer = 0;
    var number =0;
 for(var i=0;i<nums.length-2;i++){
        for(var j=i+1;j<nums.length-1;j++){
            for(var l=j+1;l<nums.length;l++){
                number=nums[i]+nums[j]+nums[l];
                var cnt=0;
                for(var k=1;k<=number;k++){
                    if(number%k==0) cnt++;
                }
                if(cnt==2) answer++;
            }
        }
    }
    return answer;
}