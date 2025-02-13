class Solution {
    public int solution(int n, String control) {
        int answer = n;
        String str[] = control.split("");
        for(int i =0;i<str.length;i++){
            switch(str[i]) {
                case "w": {
                    answer+=1;
                    break;
                }
                case "s":{
                    answer--;
                    break;
                }
                    
                case "d" :{
                    answer+=10;
                    break;
                }
                   
                case  "a" :{
                    answer-=10;
                    break; 
                }
            }
        }
        
        return answer;
    }
}