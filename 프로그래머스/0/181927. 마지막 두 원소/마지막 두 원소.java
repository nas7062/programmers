import java.util.Arrays;
class Solution {
    public int[] solution(int[] num_list) {
        int last =num_list[num_list.length-1];
        int second =num_list[num_list.length-2];
        
        int newValue = last >second ? last-second : last*2;
        int[] answer = Arrays.copyOf(num_list,num_list.length+1);
        answer[answer.length-1] = newValue;
        
        return answer;
    }
}