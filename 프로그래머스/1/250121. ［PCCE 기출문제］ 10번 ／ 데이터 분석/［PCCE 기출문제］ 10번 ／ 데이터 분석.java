import java.util.ArrayList;
import java.util.List;
import java.util.Collections;
import java.util.Comparator;
class Solution {
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        List<int[]> filteredData = new ArrayList<>();
        switch(ext) {
            case "code": {
                filtering(data,0,val_ext,filteredData);
                break;
            }    
            case "date": {
                 filtering(data,1,val_ext,filteredData);
                    break;
            }
            case "maximum" : {
                filtering(data,2,val_ext,filteredData);
                break;
            }
            case "remain" : {
                filtering(data,3,val_ext,filteredData);
                break;
            }
        }
        switch(sort_by) {
            case "code" : {
                sorting(filteredData,0);
                break;
            }
                case "date": {
                 sorting(filteredData,1);
                    break;
            }
            case "maximum" : {
                sorting(filteredData,2);
                break;
            }
            case "remain" : {
                sorting(filteredData,3);
                break;
            }
        }
        return filteredData.toArray(new int[filteredData.size()][filteredData.size()]);
    }
    
    public void filtering(int[][] data, int n, int val_ext, List<int[]> filteredData) {
        for(int[] db : data) {
            if(db[n] <val_ext) {
                filteredData.add(db);
            }
        }
    }
    public void sorting(List<int[]> filteredData,int n) {
        Collections.sort(filteredData, Comparator.comparingInt(a -> a[n]));
    }
}

