package fundamentals.cafe;

public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffeePrice = 2;
        double lattePrice = 3;
        double cappuccinoPrice = 2.5;

        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = true;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        String order1 = isReadyOrder1 ? readyMessage : pendingMessage;
        System.out.println(customer1 + order1);
        String order2 = isReadyOrder2 ? readyMessage : pendingMessage;
        System.out.println(customer2 + order2);
        System.out.println(customer3 + ", "+ displayTotalMessage + lattePrice*2);
        String order3 = isReadyOrder3 ? readyMessage : pendingMessage;
        System.out.println(customer3 + order3);
        System.out.println(customer4 + ", Latte price is $"+ lattePrice);
        System.out.println("You were charged for a coffee, price is $"+ dripCoffeePrice);
        System.out.println("You owe $"+(lattePrice-dripCoffeePrice));
    }
}