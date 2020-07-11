package com.example.demo.basic;

//Simple bean which will be used to send a response for the basic authentication request.
public class AuthenticationBean {
    private String message;

    public AuthenticationBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}