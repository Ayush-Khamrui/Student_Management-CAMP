package com.cap.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.cap.main.entity.Faculty;

public interface FacultyRepository extends CrudRepository<Faculty,Integer> {

	@Query(value = "select f from Faculty f where f.fname=:fname")
	List<Faculty> findByFacultyName(@Param("fname") String fname);
}
