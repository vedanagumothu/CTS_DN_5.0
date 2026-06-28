import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {

        assertEquals(5, 2 + 3); // assertion equal

        assertTrue(5 > 3); // assertion true

        assertFalse(5 < 3);// assertion false

        assertNull(null);// assertion null

        assertNotNull(new Object());// assertion not null
    }
}