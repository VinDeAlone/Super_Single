package com.Super_Single.userService.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Super_Single.userService.converters.UserDTOToUserConverter;
import com.Super_Single.userService.dtos.UserDTO;
import com.Super_Single.userService.entities.User;
import com.Super_Single.userService.services.UserService;
import com.Super_Single.userService.utils.TemporaryStorage;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService ser;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable int id){
		return ResponseEntity.status(HttpStatus.OK)
				.body(this.ser.getUserById(id))
				;
	}
	
	@PostMapping
	public ResponseEntity<?> createUser(@RequestBody UserDTO dto){
		TemporaryStorage.setDto(dto);
		User u = UserDTOToUserConverter.convert(dto);
		
		this.ser.createUser(u);
		
		return ResponseEntity.status(HttpStatus.OK)
				.body("Saved user successfully !!!")
				;
	}

}
