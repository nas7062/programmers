import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
class Solution {
    public int[] solution(int n, int[] slicer, int[] num_list) {
        int[] answer = {};
        switch(n) {
            case 1 : {
               answer= Arrays.copyOf(num_list,slicer[1]+1);
                break;
            }
            case 2 : {
                answer = Arrays.copyOfRange(num_list,slicer[0],num_list.length);
                break;
            }
            case 3 : {
                answer = Arrays.copyOfRange(num_list,slicer[0],slicer[1]+1);
                break;
            }
            case 4 : {
                List<Integer> tempList = new ArrayList<>();
                for (int i = slicer[0]; i <= slicer[1]; i += slicer[2]) {
                    tempList.add(num_list[i]);
                }
                // stream 생성 => 각 요소를 Integer에서 int로 변경 =>int 배열로 변환
                answer = tempList.stream().mapToInt(Integer::intValue).toArray();
                break;
            }
        }
        return answer;
    }
}