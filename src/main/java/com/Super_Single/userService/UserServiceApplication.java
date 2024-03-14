package com.Super_Single.userService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.Super_Single.userService.converters.UserDTOToUserConverter;
import com.Super_Single.userService.dtos.UserDTO;
import com.Super_Single.userService.entities.BirthCheckPoints;
import com.Super_Single.userService.entities.User;
import com.Super_Single.userService.services.BirthCheckPointsService;
import com.Super_Single.userService.services.UserService;
import com.Super_Single.userService.utils.TemporaryStorage;

@SpringBootApplication
public class UserServiceApplication implements CommandLineRunner {
	
	@Autowired
	private BirthCheckPointsService ser;
	
	@Autowired
	private UserService uSer;

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Server started on port : 8052");
		
		saveBirthCheckPoints();
		saveUsers();
	}
	
	private void saveBirthCheckPoints() {
		BirthCheckPoints b1 = BirthCheckPoints.builder()
				.month(1)
				.checkpoints("1:8,3:5,11:6,27:4")
				.build();
		this.ser.setCheckPoints(b1);
		BirthCheckPoints b2 = BirthCheckPoints.builder()
				.month(2)
				.checkpoints("6:6,17:8,24:3")
				.build();
		this.ser.setCheckPoints(b2);
		BirthCheckPoints b3 = BirthCheckPoints.builder()
				.month(3)
				.checkpoints("3:3,7:5,11:5,12:3")
				.build();
		this.ser.setCheckPoints(b3);
		BirthCheckPoints b4 = BirthCheckPoints.builder()
				.month(4)
				.checkpoints("1:3,7:5,11:5,12:3")
				.build();
		this.ser.setCheckPoints(b4);
		BirthCheckPoints b5 = BirthCheckPoints.builder()
				.month(5)
				.checkpoints("1:8,17:8")
				.build();
		this.ser.setCheckPoints(b5);
		BirthCheckPoints b6 = BirthCheckPoints.builder()
				.month(6)
				.checkpoints("28:6,29:3")
				.build();
		this.ser.setCheckPoints(b6);
		BirthCheckPoints b7 = BirthCheckPoints.builder()
				.month(7)
				.checkpoints("12:4,19:9,20:5,22:8,28:6")
				.build();
		this.ser.setCheckPoints(b7);
		BirthCheckPoints b8 = BirthCheckPoints.builder()
				.month(8)
				.checkpoints("16:8,23:4,24:6,25:7,29:4,31:7")
				.build();
		this.ser.setCheckPoints(b8);
		BirthCheckPoints b9 = BirthCheckPoints.builder()
				.month(9)
				.checkpoints("1:8,9:3,13:4,21:3")
				.build();
		this.ser.setCheckPoints(b9);
		BirthCheckPoints b10 = BirthCheckPoints.builder()
				.month(10)
				.checkpoints("")
				.build();
		this.ser.setCheckPoints(b10);
		BirthCheckPoints b11 = BirthCheckPoints.builder()
				.month(11)
				.checkpoints("4:6,8:9")
				.build();
		this.ser.setCheckPoints(b11);
		BirthCheckPoints b12 = BirthCheckPoints.builder()
				.month(12)
				.checkpoints("7:6,12:8")
				.build();
		this.ser.setCheckPoints(b12);
	}
	
	private void saveUsers() {
		UserDTO d1 = UserDTO.builder()
				.gender("male")
				.mobile("9370551858")
				.email("vinniiijaddu@gmail.com")
				.relegion("Hindu")
				.cast("96k Maratha")
				.subcast("Yadav")
				.gotra("Agastya")
				.dosh("Kala sparsh")
				.fName("Vinayak")
				.mName("Vilas")
				.lName("Jadhav")
				.bdate("1996-08-31")
				.age(28)
				.height(6)
				.disability("None")
				.country("India")
				.state("Maharashtra")
				.city("Pune")
				.maritalStatus("Never married")
				.familyStatus("middle class")
				.familyType("nuclear")
				.familyType2("traditional")
				.education("bTech")
				.employment("Private")
				.occupation("Software professional")
				.salary("450000")
				.workLocation("Pune")
				.build();
		TemporaryStorage.setDto(d1);
		User u1 = UserDTOToUserConverter.convert(d1);
		this.uSer.createUser(u1);
		
		UserDTO d2 = UserDTO.builder()
				.gender("female")
				.mobile("7507206069")
				.email("monikagulhane@gmail.com")
				.relegion("Hindu")
				.cast("Teli")
				.subcast("Savaji")
				.gotra("Agastya")
				.dosh("Bhrigu")
				.fName("Monika")
				.mName("Gajanan")
				.lName("Gulhane")
				.bdate("1995-07-20")
				.age(29)
				.height(5)
				.disability("None")
				.country("India")
				.state("Maharashtra")
				.city("Pune")
				.maritalStatus("Never married")
				.familyStatus("middle class")
				.familyType("nuclear")
				.familyType2("traditional")
				.education("bTech")
				.employment("Private")
				.occupation("Software professional")
				.salary("450000")
				.workLocation("Pune")
				.build();
		TemporaryStorage.setDto(d2);
		User u2 = UserDTOToUserConverter.convert(d2);
		this.uSer.createUser(u2);
		
		UserDTO d3 = UserDTO.builder()
				.gender("female")
				.mobile("7058361848")
				.email("shwetaroy@gmail.com")
				.relegion("Hindu")
				.cast("96k Maratha")
				.subcast("Maratha")
				.gotra("Atri")
				.dosh("Manglic")
				.fName("Shweta")
				.mName("Chandrakant")
				.lName("Ghadge")
				.bdate("1996-08-29")
				.age(28)
				.height(5)
				.disability("None")
				.country("India")
				.state("Maharashtra")
				.city("Pune")
				.maritalStatus("Never married")
				.familyStatus("middle class")
				.familyType("nuclear")
				.familyType2("traditional")
				.education("bTech")
				.employment("Private")
				.occupation("Software professional")
				.salary("450000")
				.workLocation("Pune")
				.build();
		TemporaryStorage.setDto(d3);
		User u3 = UserDTOToUserConverter.convert(d3);
		this.uSer.createUser(u3);
		
		UserDTO d4 = UserDTO.builder()
				.gender("male")
				.mobile("9503711067")
				.email("adikanase@gmail.com")
				.relegion("Hindu")
				.cast("96k Maratha")
				.subcast("Maratha")
				.gotra("Gautama")
				.dosh("None")
				.fName("Aditya")
				.mName("Shankar")
				.lName("Kanase")
				.bdate("1997-04-01")
				.age(27)
				.height(6)
				.disability("None")
				.country("India")
				.state("Maharashtra")
				.city("Pune")
				.maritalStatus("Never married")
				.familyStatus("middle class")
				.familyType("nuclear")
				.familyType2("traditional")
				.education("bTech")
				.employment("Private")
				.occupation("Software professional")
				.salary("450000")
				.workLocation("Pune")
				.build();
		TemporaryStorage.setDto(d4);
		User u4 = UserDTOToUserConverter.convert(d4);
		this.uSer.createUser(u4);
	}

}
