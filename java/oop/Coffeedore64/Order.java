package oop.Coffeedore64;
import java.util.ArrayList;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items =  new ArrayList<>();

    public Order(){
        this("Guest", false, new ArrayList<Item>());
    }

    public Order(String name){
        this.setName(name);
    }
    public Order(String n, boolean r, ArrayList<Item> i){
        setName(n);
        setReady(r);
        items = i;
    }

    public void addItem(Item item){
        Item carbonCopy = new Item(item.getName(), item.getPrice());
        items.add(carbonCopy);
    }

    public String getStatusMessage(){
        return isReady() ? "Your order is ready." : "Thank you for waiting. Your order will be ready soon.";
    }
    public double getTotal(){
        ArrayList<Item> items = getItems();
        double sum = 0;
        for(Item item : items)
            sum += item.getPrice();
        return sum;
    }
    public void display(){
        System.out.println("Customer Name: "+ getName());
        for(Item item: items){
            System.out.printf("%s - $%.2f\n", item.getName(), item.getPrice());
        }
        System.out.printf("$%.2f\n",getTotal());
    }


    //Getters and Setters
    public boolean isReady() {
        return ready;
    }
    public void setReady(boolean ready) {
        this.ready = ready;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public ArrayList<Item> getItems() {
        return items;
    }
    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }
}
