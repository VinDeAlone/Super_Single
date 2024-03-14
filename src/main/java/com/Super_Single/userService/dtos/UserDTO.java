package com.Super_Single.userService.dtos;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDTO {
	
	private String gender;
	private String mobile;
	private String email;
	private String relegion;
	private String cast;
	private String subcast;
	private String gotra;
	private String dosh;
	private String fName;
	private String mName;
	private String lName;
	private String bdate;
	private int age;
	private int height;
	private String disability;
	private String country;
	private String state;
	private String city;
	private String maritalStatus;
	private String familyStatus;
	private String familyType;
	private String familyType2;
	private String education;
	private String employment;
	private String occupation;
	private String salary;
	private String workLocation;
	public UserDTO() {
		super();
	}
	public UserDTO(String gender, String mobile, String email, String relegion, String cast, String subcast,
			String gotra, String dosh, String fName, String mName, String lName, String bdate, int age, int height,
			String disability, String country, String state, String city, String maritalStatus, String familyStatus,
			String familyType, String familyType2, String education, String employment, String occupation, String salary,
			String workLocation) {
		super();
		this.gender = gender;
		this.mobile = mobile;
		this.email = email;
		this.relegion = relegion;
		this.cast = cast;
		this.subcast = subcast;
		this.gotra = gotra;
		this.dosh = dosh;
		this.fName = fName;
		this.mName = mName;
		this.lName = lName;
		this.bdate = bdate;
		this.age = age;
		this.height = height;
		this.disability = disability;
		this.country = country;
		this.state = state;
		this.city = city;
		this.maritalStatus = maritalStatus;
		this.familyStatus = familyStatus;
		this.familyType = familyType;
		this.familyType2 = familyType2;
		this.education = education;
		this.employment = employment;
		this.occupation = occupation;
		this.salary = salary;
		this.workLocation = workLocation;
	}

}
