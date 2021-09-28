package oop.Coffeedore64;

public class Item {
    private String name;
    private double price;
    private int index = 0;
    private static int curIndex = 0;

    public Item(String name, double price){
        this.name = name;
        this.price = price;
        this.index = curIndex;
        curIndex++;
    }

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public double getPrice(){
        return price;
    }
    public void setPrice(double price){
        this.price = price;
    }
    public int getIndex() {
        return index;
    }
    public void setIndex(int index) {
        this.index = index;
    }
}
