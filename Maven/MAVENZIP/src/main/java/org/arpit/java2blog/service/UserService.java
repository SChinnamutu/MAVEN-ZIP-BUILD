package org.arpit.java2blog.service;

import java.util.List;

import org.arpit.java2blog.bean.User;

public interface UserService {

	User findById(long id);
    
    User findByName(String name);
     
    void saveUser(User user);
     
    void updateUser(User user);
     
    void deleteUserById(long id);
 
    List<User> findAllUsers(); 
     
    void deleteAllUsers();
     
    public boolean isUserExist(User user);
}
