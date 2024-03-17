package com.Super_Single.userService.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
@Builder
public class User {
	
	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "mobile")
	private String mobile;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "relegion")
	private String relegion;
	
	@Column(name = "cast")
	private String cast;
	
	@Column(name = "subcast")
	private String subcast;
	
	@Column(name = "gotra")
	private String gotra;
	
	@Column(name = "dosh")
	private String dosh;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "middle_name")
	private String middleName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "birth_date")
	private String bdate;
	
	@Column(name = "age")
	private int age;
	
	@Column(name = "height")
	private int height;
	
	@Column(name = "disability")
	private String disability;
	
	@Column(name = "country")
	private String country;
	
	@Column(name = "state")
	private String state;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "marital_status")
	private String maritalStatus;
	
	@Column(name = "family_status")
	private String familyStatus;
	
	@Column(name = "family_type")
	private String familyType;
	
	@Column(name = "family_type2")
	private String familyType2;
	
	@Column(name = "education")
	private String education;
	
	@Column(name = "employment")
	private String employment;
	
	@Column(name = "occupation")
	private String occupation;
	
	@Column(name = "salary")
	private String salary;
	
	@Column(name = "work_location")
	private String workLocation;
	
	@Column(name = "table_id")
	private int tableId;

	public User() {
		super();
	}

	public User(int id, String gender, String mobile, String email, String relegion, String cast, String subcast,
			String gotra, String dosh, String firstName, String middleName, String lastName, String bdate, int age, int height,
			String disability, String country, String state, String city, String maritalStatus, String familyStatus,
			String familyType, String familyType2, String education, String employment, String occupation, String salary,
			String workLocation, int tableId) {
		super();
		this.id = id;
		this.gender = gender;
		this.mobile = mobile;
		this.email = email;
		this.relegion = relegion;
		this.cast = cast;
		this.subcast = subcast;
		this.gotra = gotra;
		this.dosh = dosh;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
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
		this.tableId = tableId;
	}

}
