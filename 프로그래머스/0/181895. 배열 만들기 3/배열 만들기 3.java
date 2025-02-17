import java.util.*;

class Solution {
    public int[] solution(int[] arr, int[][] intervals) {
    List<Integer> list = new ArrayList<>();

    for (int i = 0; i < intervals.length; i++) {
    int[] newArr = Arrays.copyOfRange(arr, intervals[i][0], intervals[i][1] + 1);
        for (int num : newArr) {
            list.add(num);
        }
    }
        int[] answer = list.stream().mapToInt(Integer::intValue).toArray();
        return answer;
    }
}
