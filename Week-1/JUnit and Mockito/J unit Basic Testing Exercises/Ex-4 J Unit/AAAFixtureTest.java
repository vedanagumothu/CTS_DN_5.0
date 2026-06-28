import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class AAAFixtureTest {

    private int balance;

    @Before
    public void setUp() {
        balance = 1000;
        System.out.println("Setup executed");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }

    @Test
    public void testDeposit() {

        // Arrange
        int depositAmount = 500;

        // Act
        int newBalance = balance + depositAmount;

        // Assert
        assertEquals(1500, newBalance);
    }

    @Test
    public void testWithdraw() {

        // Arrange
        int withdrawAmount = 300;

        // Act
        int newBalance = balance - withdrawAmount;

        // Assert
        assertEquals(700, newBalance);
    }
}