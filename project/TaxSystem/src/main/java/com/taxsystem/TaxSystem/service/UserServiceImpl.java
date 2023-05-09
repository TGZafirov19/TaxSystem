package com.taxsystem.TaxSystem.service;

import com.taxsystem.TaxSystem.model.User;
import com.taxsystem.TaxSystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository UserRepository;


    @Override
    public User saveUser(User user) {
        return UserRepository.save(user);
    }
}
