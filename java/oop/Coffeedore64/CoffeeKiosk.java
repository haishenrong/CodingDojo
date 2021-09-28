package oop.Coffeedore64;

import java.util.ArrayList;

public class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk() {
        menu = new ArrayList<>();
        orders = new ArrayList<>();
    }

    public void addMenuItem(String name, double price){
        menu.add(new Item(name, price));
    }

    public void displayMenu(){
        for(Item item: menu){
            System.out.printf("%d %s -- $%.2f\n", item.getIndex(), item.getName(), item.getPrice());
        }
    }

    public void newOrder() {
        
    	// Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
    
    	// Your code:
        // Create a new order with the given input string
        // Show the user the menu, so they can choose items to add.
        Order next = new Order(name);
    	// Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        
        // Write a while loop to collect all user's order items
        while(!itemNumber.equals("q")) {
            // Get the item object from the menu, and add the item to the order
            // Ask them to enter a new item index or q again, and take their input
            next.addItem(menu.get(Integer.parseInt(itemNumber)));
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }
        // After you have collected their order, print the order details 
    	// as the example below. You may use the order's display method.
        next.display();
    }
    public void addMenuItemByInput() {
        System.out.println("Please enter item name for new menu item, 'q' to quit:");
        String name = System.console().readLine();
        String price = "";

        while(!name.equals("q")) {
            System.out.println("Please enter item price for new menu item:");
            price = System.console().readLine();
            this.addMenuItem(name, Double.parseDouble(price));
            System.out.println("Please enter item name for new menu item, 'q' to quit:");
            name = System.console().readLine();
        }
    }
    

    public ArrayList<Order> getOrders() {
        return orders;
    }
    public ArrayList<Item> getMenu() {
        return menu;
    }
    public void setMenu(ArrayList<Item> menu) {
        this.menu = menu;
    }
    public void setOrders(ArrayList<Order> orders) {
        this.orders = orders;
    }
}
