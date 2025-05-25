package com.Tian.response;

public class AuthResponse {

    private String token;
    private boolean status;

    // Constructor
    public AuthResponse(String token, boolean status) {
        this.token = token;
        this.status = status;
    }

    // Getters and Setters
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}