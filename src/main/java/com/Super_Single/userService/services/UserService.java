package com.Super_Single.userService.services;

import com.Super_Single.userService.entities.User;

public interface UserService {
	
	User getUserById(int id);
	User createUser(User user);

}
