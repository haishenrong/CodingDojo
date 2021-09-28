package oop.ordersAndItems;

public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        Item item1 = new Item("food", 2.5);
        Item item2 = new Item("stuff", 3.5);
        Item item3 = new Item("things", 7.0);
        Item item4 = new Item("objects", 1.5);
        Item item5 = new Item("cappuccino", 3.0);
        Item item6 = new Item("latte", 3.5);

        // Order variables -- order1, order2 etc.
        Order order1 = new Order();
        Order order2 = new Order();
        Order order3 = new Order();
        Order order4 = new Order();
        order1.name = "Cindhuri";
        order2.name = "Jimmy";
        order3.name = "Noah";
        order4.name = "Sam";
        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.println(order1);
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        order2.addItem(item1); // Add item1 to order2's item list and increment the order's total.
        order3.addItem(item5); // order3 ordered a cappucino.
        order4.addItem(item6); // order4 added a latte.
        order1.ready = true; // Cindhuri’s order is now ready. Update her status.
        order4.addItem(item6); // Sam ordered more drinks - 2 lattes. 
        order4.addItem(item6);
        order2.ready = true; // Jimmy’s order is now ready. Update his status.
    }
}
