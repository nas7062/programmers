class Solution {
    public double solution(int[] numbers) {
        double answer = 0;
        int len = numbers.length;
        for(int num :numbers) {
            answer+=num;
        }
        return answer/len;
    }
}