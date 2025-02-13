class Solution {
    public String solution(String myString) {
        String answer = "";
        for (char str : myString.toCharArray()) {
            if (str < 'l') {
                answer+='l';
            } else {
                answer+=str;
            }
        }
        
        return answer.toString();
    }
}