package oop.baristaChallenge;

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
        Order order3 = new Order("Cindhuri");
        Order order4 = new Order("Jimmy");
        Order order5 = new Order("Noah");
        // Application Simulations
        // Use this example code to test various orders' updates

        order1.addItem(item1);
        order1.addItem(item5); 
        order2.addItem(item6); 
        order2.addItem(item3); 
        order3.addItem(item2); 
        order3.addItem(item1);
        order4.addItem(item4); 
        order4.addItem(item4); 
        order5.addItem(item5); 
        order5.addItem(item1); 

        System.out.println("Ready:");
        order5.setReady(true);
        order1.setReady(true);
        System.out.println(order1.getStatusMessage());
        System.out.println(order2.getStatusMessage());
        System.out.println(order3.getStatusMessage());
        System.out.println(order4.getStatusMessage());
        System.out.println(order5.getStatusMessage());
        System.out.println("Total:");
        System.out.println(order1.getTotal());
        System.out.println(order2.getTotal());
        System.out.println(order3.getTotal());
        System.out.println(order4.getTotal());
        System.out.println(order5.getTotal());
        System.out.println("Display:");
        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();

    }
}
