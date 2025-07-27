import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create a mock of ExternalApi
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Use mock in service
        MyService service = new MyService(mockApi);

        // Step 3: Call method that should trigger mock
        service.fetchData();

        // Step 4: Verify that mockApi.getData() was called once
        verify(mockApi).getData();
    }
}
