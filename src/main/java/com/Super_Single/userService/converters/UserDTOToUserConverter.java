package com.Super_Single.userService.converters;

import com.Super_Single.userService.dtos.UserDTO;
import com.Super_Single.userService.entities.User;

public class UserDTOToUserConverter {
	
	public static User convert(UserDTO dto) {
		User user = User.builder()
				.gender(dto.getGender())
				.mobile(dto.getMobile())
				.email(dto.getEmail())
				.relegion(dto.getRelegion())
				.cast(dto.getCast())
				.subcast(dto.getSubcast())
				.gotra(dto.getGotra())
				.dosh(dto.getDosh())
				.firstName(dto.getFirstName())
				.middleName(dto.getMiddleName())
				.lastName(dto.getLastName())
				.bdate(dto.getBdate())
				.age(dto.getAge())
				.height(dto.getHeight())
				.disability(dto.getDisability())
				.country(dto.getCountry())
				.state(dto.getState())
				.city(dto.getCity())
				.maritalStatus(dto.getMaritalStatus())
				.familyStatus(dto.getFamilyStatus())
				.familyType(dto.getFamilyType())
				.familyType2(dto.getFamilyType2())
				.education(dto.getEducation())
				.employment(dto.getEmployment())
				.occupation(dto.getOccupation())
				.salary(dto.getSalary())
				.workLocation(dto.getWorkLocation())
				.build();
		return user;
	}

}
