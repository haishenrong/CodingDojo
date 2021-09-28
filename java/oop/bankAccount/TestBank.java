package oop.bankAccount;

public class TestBank {
    public static void main(String[] args){
        BankAccount account1 = new BankAccount();
        System.out.printf("Total: $%.2f\n", account1.getTotalMoney());
        System.out.printf("Checking: $%.2f\n", account1.getCheckingBalance());
        System.out.printf("Savings: $%.2f\n", account1.getSavingsBalance());
        account1.deposit(25.0,"checking");
        account1.deposit(25.0,"savings");
        account1.withdrawl(10.0,"checking");
        account1.withdrawl(12.5,"savings");
        System.out.printf("Total: $%.2f\n", account1.getTotalMoney());
        System.out.printf("Checking: $%.2f\n", account1.getCheckingBalance());
        System.out.printf("Savings: $%.2f\n", account1.getSavingsBalance());
        account1.withdrawl(20.0,"checking");
        account1.withdrawl(13.0,"savings");
    }
}
