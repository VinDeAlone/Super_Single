package com.Super_Single.userService.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Super_Single.userService.entities.User;
import com.Super_Single.userService.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private BirthCheckPointsService ser;

	@Override
	public User getUserById(int id) {
		return this.repo.findById(id).orElseThrow(()->new RuntimeException("User not found!!!"));
	}

	@Override
	public User createUser(User user) {
		if(this.isUserExists(user)) {
			return null;
		}
		
		int month = Integer.parseInt(user.getBdate().split("-")[1]);
		int date = Integer.parseInt(user.getBdate().split("-")[2]);
		int diff = 100;
		int tableId = 0;
		
		String checks = this.ser.getCheckPoints(month);
		
		String[] checksArray = checks.split(",");
		
		for(int i = 0; i < checksArray.length  ;i++) {
			
			String str = checksArray[i];
			
			int v = Integer.parseInt(str.split(":")[0]);
			int diff2 = v - date > 0 ? v - date : date - v;
			
			if(diff > diff2) {
				diff = diff2;
				tableId = Integer.parseInt(str.split(":")[1]);
			}
		}
		
		user.setTableId(tableId);
		
		return this.repo.save(user);
	}
	
	private boolean isUserExists(User user) {
		List<User> users = this.repo.findAll();
		for(int i = 0; i<users.size(); i++) {
			if(users.get(i).getMobile().equals(user.getMobile())) {
				return true;
			}
		}
		return false;
	}

}
