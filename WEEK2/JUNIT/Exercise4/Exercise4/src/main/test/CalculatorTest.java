import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

public class CalculatorTest {

    private Calculator calculator;

    // Setup method (called before each test)
    @BeforeEach
    public void setUp() {
        calculator = new Calculator(); // Arrange
        System.out.println("Setup: Calculator instance created");
    }

    // Teardown method (called after each test)
    @AfterEach
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator instance destroyed");
    }

    @Test
    public void testAddition() {
        // Arrange done in setUp()

        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(10, 4);
        assertEquals(6, result);
    }
}
