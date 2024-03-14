package com.Super_Single.userService.services;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Super_Single.userService.entities.BirthCheckPoints;
import com.Super_Single.userService.repositories.BirthCheckPointsRepository;

@Service
public class BirthCheckPointsServiceImpl implements BirthCheckPointsService {
	
	@Autowired
	private BirthCheckPointsRepository repo;

	@Override
	public String getCheckPoints(int month) {
		BirthCheckPoints check = this.repo.findById(month).orElseThrow(()->new RuntimeException("Check not found !!!"));
		return check.getCheckpoints();
	}

	@Override
	public BirthCheckPoints setCheckPoints(BirthCheckPoints birthCheckPointts) {
		if(isCheckExists(birthCheckPointts)) {
			return null;
		}
		return this.repo.save(birthCheckPointts);
	}
	
	private boolean isCheckExists(BirthCheckPoints check) {
		List<BirthCheckPoints> checks = this.repo.findAll();
		
		for(int i = 0; i<checks.size(); i++) {
			if(checks.get(i).getMonth() == check.getMonth()) {
				return true;
			}
		}
		return false;
	}

}
