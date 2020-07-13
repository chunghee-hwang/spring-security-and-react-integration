package com.example.demo.jwt;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

// Provides an in-memory implementation of UserDetailsService storing the user credentials.
@Service
public class JwtInMemoryUserDetailService implements UserDetailsService {
    private List<JwtUserDetails> inMemoryUserList = new ArrayList<>(Arrays.stream(new JwtUserDetails[] {
            new JwtUserDetails(1L, "hch0821", new BCryptPasswordEncoder().encode("1234"), "노래중독자", "ROLE_USER_2") })
            .collect(Collectors.toList()));

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
                .filter(user -> user.getUsername().equals(username)).findFirst();

        if (!findFirst.isPresent()) {
            throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
        }
        return findFirst.get();
    }

}