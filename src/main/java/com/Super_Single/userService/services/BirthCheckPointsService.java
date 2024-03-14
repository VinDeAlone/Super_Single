package com.Super_Single.userService.services;

import java.util.Map;

import com.Super_Single.userService.entities.BirthCheckPoints;

public interface BirthCheckPointsService {
	
	String getCheckPoints(int month);
	BirthCheckPoints setCheckPoints(BirthCheckPoints birthCheckPointts);

}
