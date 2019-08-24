import java.util.*;

public class Solution {

    public static boolean canWin(int m, int[] game, int i) {
        // Return true if you can win the game; otherwise, return false.
         if (i < 0 || game[i] == 1) return false;
    if ((i == game.length - 1) || i + m > game.length - 1) return true;

    game[i] = 1;
    return canWin(m, game, i + 1) || canWin(m, game, i - 1) || canWin(m, game, i + m);
        
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int q = scan.nextInt();
        while (q-- > 0) {
            int n = scan.nextInt();
            int leap = scan.nextInt();
            
            int[] game = new int[n];
            for (int i = 0; i < n; i++) {
                game[i] = scan.nextInt();
            }

            System.out.println( (canWin(leap, game,0 )) ? "YES" : "NO" );
        }
        scan.close();
    }
}

