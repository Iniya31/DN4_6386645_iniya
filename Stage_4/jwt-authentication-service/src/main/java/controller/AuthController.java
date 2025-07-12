package controller;

import com.cognizant.jwt_authentication_service.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Map;

@RestController
public class AuthController {
	@Autowired
    private JwtUtil jwtUtil;

    @RequestMapping("/authenticate")
    public Map<String, String> authenticateUser(Principal principal) {
        // Spring Security will automatically validate user:password
        String username = principal.getName();
        String token = jwtUtil.generateToken(username);
        return Map.of("token", token);
    }
}
