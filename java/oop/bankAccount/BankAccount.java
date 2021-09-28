package oop.bankAccount;

import java.util.HashMap;

public class BankAccount {
    private double checkingBalance;
    private double savingsBalance;
    private static int totalAccounts = 0;
    private static HashMap<BankAccount, Double> totalAmounts = new HashMap<>();

    public BankAccount(){
        this(0.0,0.0);
    }
    public BankAccount(double checkingBalance, double savingsBalance){
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        totalAccounts++;
        totalAmounts.put(this, checkingBalance+savingsBalance);
    }
    public void deposit(double amount, String balanceType){
        totalAmounts.put(this, totalAmounts.get(this)+amount);
        if(balanceType.equals("checking")) 
            setCheckingBalance(getCheckingBalance()+amount); 
        else if(balanceType.equals("savings")) 
            setSavingsBalance(getSavingsBalance()+amount);
        else
            System.out.println("Must input checking or savings in second parameter:");
    }
    public void withdrawl(double amount, String balanceType){
        if(balanceType.equals("checking") && amount <= getCheckingBalance()){
            setCheckingBalance(getCheckingBalance()-amount); 
            totalAmounts.put(this, totalAmounts.get(this)-amount);
        }
        else if(balanceType.equals("savings") && amount <= getSavingsBalance()){
            setSavingsBalance(getSavingsBalance()-amount);
            totalAmounts.put(this, totalAmounts.get(this)-amount);
        }
        else if (amount > getSavingsBalance() || amount > getCheckingBalance())
            System.out.println("Insufficcient Funds!");
        else
            System.out.println("Must input checking or savings in second parameter:");
    }
    public double getTotalMoney(){
        return totalAmounts.get(this);
    }
    //Getters and Setters
    public double getCheckingBalance() {
        return checkingBalance;
    }
    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }
    public double getSavingsBalance() {
        return savingsBalance;
    }
    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }
}
