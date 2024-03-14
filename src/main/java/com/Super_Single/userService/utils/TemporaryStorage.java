package com.Super_Single.userService.utils;

import com.Super_Single.userService.dtos.UserDTO;

public class TemporaryStorage {
	
	private static UserDTO sdto;
	public static UserDTO getDto() {
		return sdto;
	}

	public static void setDto(UserDTO dto) {
		sdto = dto;
	}
	

}
