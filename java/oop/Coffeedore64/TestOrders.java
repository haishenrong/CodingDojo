package oop.Coffeedore64;

public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        CoffeeKiosk kiosk = new CoffeeKiosk();
        kiosk.addMenuItem("things", 5.5);
        kiosk.addMenuItem("stuff", 3.5);
        kiosk.addMenuItem("objects", 2.0);
        kiosk.addMenuItem("more stuff", 7.5);
        kiosk.displayMenu();

        kiosk.addMenuItemByInput();
        kiosk.displayMenu();
        
        kiosk.newOrder();
    }
}
