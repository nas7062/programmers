function solution(people, limit) {
    var answer= 0;
    var left = 0;
    var right =people.length-1;
    people = people.sort((a,b)=>a-b);
    while(left<=right)
        {
        
            if(people[left]+people[right]<=limit)
                left++;
            right--;
            answer++;
            
        }
    
    return answer;
}