package com.example.demo.basic;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Provides the implementation for @GetMapping(path = "/basicauth") to check if
 * the basic authentication credential are valid
 */
@RestController
public class BasicAuthenticationController {
    @GetMapping("/basicauth")
    public AuthenticationBean authenticate() {
        // throw new RuntimeException("Some Error has happended!")
        return new AuthenticationBean("You are authenticated");
    }
}