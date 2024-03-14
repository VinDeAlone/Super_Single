package com.Super_Single.userService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Super_Single.userService.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
