package oop.ordersAndItems;
import java.util.ArrayList;

public class Order {
    String name;
    double total;
    boolean ready;
    ArrayList<Item> items =  new ArrayList<>();
/*
    public Order(String n, double t, boolean r, ArrayList<Item> i){
        name = n;
        total = t;
        ready = r;
        items = i;
    }*/
    public void addItem(Item item){
        total += item.price;
        items.add(item);
    }
}
