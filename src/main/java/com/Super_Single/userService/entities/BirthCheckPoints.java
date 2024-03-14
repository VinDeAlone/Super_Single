package com.Super_Single.userService.entities;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name = "birth_check_points")
@Data
@Builder
public class BirthCheckPoints {
	
	@Id
	@Column(name = "month")
	private int month;
	
	@Column(name = "check_points")
	private String checkpoints;
	
	public BirthCheckPoints() {
		super();
	}
	
	public BirthCheckPoints(int month, String checkpoints) {
		super();
		this.month = month;
		this.checkpoints = checkpoints;
	}

}
