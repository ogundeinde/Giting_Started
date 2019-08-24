import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        LinkedList<Integer> row = new LinkedList<>();
        
        
        for(int i =0;i<n;i++ ){
            int s = scan.nextInt();
            row.add(s);
        }
        int m = scan.nextInt();
        
               
        for(int i =0;i<m;i++ ){
            String s = scan.next();
                
            if(s.equals("Insert")){
               int x = scan.nextInt();
                int y = scan.nextInt();
                row.add(x,y);
            }
            else{
                int z = scan.nextInt();
                row.remove(z);
            }
        }
        scan.close();
        for(int i = 0;i<row.size();i++){
            System.out.print(row.get(i) + " ");
        }
    }
}

