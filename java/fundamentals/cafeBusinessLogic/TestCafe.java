package fundamentals.cafeBusinessLogic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class TestCafe {
    
	public static void main(String[] args) {
	    // TO-DO:
	    // Create an instance of the CafeUtil class        
	    // in order to use the CafeUtil class' methods.
        CafeUtil appTest =  new CafeUtil();
	    // Hint: it will need to correspond with the variable name
	    // used in your test code.
    
	    // Given Test Cases Here
        System.out.println("----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n", appTest.getStreakGoal(10));

        System.out.println("----- Price Chart Test-----");
        appTest.printPriceChart("Chai Latte Mix", 4.5, 3);
        appTest.printPriceChart("Specialty Coaster", 2.0, 5);

        System.out.println("----- Order Total Test-----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: $%s \n",appTest.getOrderTotal(lineItems));

        System.out.println("----- Display Menu Test-----");
        List<String> list = Arrays.asList( "drip coffee", "cappucino", "latte", "mocha");
        list.add("hello");
        System.out.println(list.get(4));
        appTest.displayMenu(new ArrayList<String>(Arrays.asList( "drip coffee", "cappucino", "latte", "mocha")), new ArrayList<Double>(Arrays.asList(1.5, 3.5, 4.5, 3.5)));

        System.out.println("----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();
        // Test 4 times
        for (int i = 0; i < 4; i++){ 
            appTest.addCustomer(customers); 
            System.out.println(customers);
        }

        appTest.addCustomers(customers); 
        System.out.println(customers);
	}
}