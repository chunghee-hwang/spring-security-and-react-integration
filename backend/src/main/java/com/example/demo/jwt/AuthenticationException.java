package com.example.demo.jwt;

// Use to throw invalid credentials or token exception
public class AuthenticationException extends RuntimeException {
    private static final long serialVersionUID = -4445322762828259491L;

    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}