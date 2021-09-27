package fundamentals.puzzling;
import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava {
    Random randMachine = new Random();

    public ArrayList<Integer> getTenRolls(){
        ArrayList<Integer> sol = new ArrayList<>();
        for(int i = 0; i<10;i++)
            sol.add(randMachine.nextInt(20)+1);
        return sol;
    }

    public char getRandomLetter(){
        return (char)(randMachine.nextInt(26)+97);
    }

    public String generatePassword(){
        String password = "";
        for(int i = 0; i<8; i++){
            password += getRandomLetter();
        }
        return password;
    }

    public String[] getNewPasswordSet(int numPasswords){
        String[] passwords = new String[numPasswords];
        for(int i = 0; i < numPasswords; i++){
            passwords[i] = generatePassword();
        }
        return passwords;
    }
}
