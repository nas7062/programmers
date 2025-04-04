import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        int min = 100000, max = 0, cnt=0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] ==2) {
                min = Math.min(min, i);
                max = Math.max(max, i);
                cnt++;
            }
        }
        if (cnt !=0) {
            return Arrays.copyOfRange(arr, min, max + 1);
        } else {
            return new int[]{-1};
        }
    }
}