package com.Tian.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

import com.Tian.model.User;
import com.Tian.repository.UserRepository;

@Service
public class CustomUserDetailsServiceImplementation implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + username);
        }

        return new org.springframework.security.core.userdetails.User(
            user.getEmail(),
            user.getPassword(),
            new ArrayList<>() // Add roles/authorities if needed
        );
    }
}