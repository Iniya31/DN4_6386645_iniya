import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    // Step 1: Create a logger for this class
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        // Step 2: Log an error message
        logger.error("This is an error message");

        // Step 3: Log a warning message
        logger.warn("This is a warning message");
    }
}

