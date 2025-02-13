class Solution {
    public String solution(String myString) {
        StringBuilder answer = new StringBuilder();
        for (char str : myString.toCharArray()) {
            if (str < 'l') {
                answer.append('l');
            } else {
                answer.append(str);
            }
        }
        
        return answer.toString();
    }
}