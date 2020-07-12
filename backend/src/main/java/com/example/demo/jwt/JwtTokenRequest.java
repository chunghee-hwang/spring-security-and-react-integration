package com.example.demo.jwt;

import java.io.Serializable;

// Represents the structure of a request to get a JWT Token.
public class JwtTokenRequest implements Serializable {
    private static final long serialVersionUID = -56167689701310345L;
    private String username;
    private String password;

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}