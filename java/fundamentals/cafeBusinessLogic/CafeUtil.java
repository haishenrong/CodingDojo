package fundamentals.cafeBusinessLogic;
import java.util.ArrayList;

public class CafeUtil {
    
    public int getStreakGoal(int weeks) {
        // Sigma(1,10) = n(n+1)/2 = 55
        return weeks*(weeks+1)/2;
    }

    public void printPriceChart(String productName, double price, int maxNumber) {
        System.out.println(productName);
        for( int i = 1; i<= maxNumber; i++)
            System.out.println(i + " - $" + ((price-0.5)*i+0.5));
        return;
    }

    public double getOrderTotal(double[] prices) {
        double sum = 0;
        for(double price:prices)
            sum += price;
        return sum;
    }

    public void displayMenu(ArrayList<String> names, ArrayList<Double> prices){
        for(int i = 0; i< names.size();i++)
            System.out.println(i+ " " + names.get(i) + " -- $" + prices.get(i));
        return;
    }

    public void addCustomer(ArrayList<String> names){
        System.out.println("Please input the customer to be added to the list of names:");
        String userName = System.console().readLine();
        System.out.println("Hello, " + userName + ". There are " + names.size() + " customers before you.");
        names.add(userName);
        return;
    }
    public void addCustomers(ArrayList<String> names){
        System.out.println("Please input one by one the customers to be added to the list of names:");
        int oldLen = names.size();
        String userName = "";
        while(!userName.equals("q")){
            System.out.println("Input 'q' to exit:");
            userName = System.console().readLine();
            names.add(userName);
        }
        names.remove(names.size()-1);
        return;
    }
}
