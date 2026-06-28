public class BankAccount {

    public int deposit(int balance, int amount) {
        return balance + amount;
    }

    public int withdraw(int balance, int amount) {
        return balance - amount;
    }
}