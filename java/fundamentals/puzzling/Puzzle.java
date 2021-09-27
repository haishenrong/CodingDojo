package fundamentals.puzzling;

import java.util.ArrayList;

public class Puzzle {
    
    public static void main(String[] args) {
        PuzzleJava generator = new PuzzleJava();   
        ArrayList<Integer> randomRolls = generator.getTenRolls();  
        System.out.println(randomRolls);
        int listLength = 8;
        String[] passwords = generator.getNewPasswordSet(listLength);
        for(int i = 0; i<listLength; i++)
            System.out.println(passwords[i]);
    }
}
