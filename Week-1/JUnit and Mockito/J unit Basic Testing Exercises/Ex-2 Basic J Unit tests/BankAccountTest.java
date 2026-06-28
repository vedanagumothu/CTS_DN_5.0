import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class BankAccountTest {

    @Test
    public void testDeposit() {
        BankAccount account = new BankAccount();
        assertEquals(1500, account.deposit(1000, 500));
    }

    @Test
    public void testWithdraw() {
        BankAccount account = new BankAccount();
        assertEquals(700, account.withdraw(1000, 300));
    }
}