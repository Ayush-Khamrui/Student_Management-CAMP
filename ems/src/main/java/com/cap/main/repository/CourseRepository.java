package com.cap.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.cap.main.entity.Course;

public interface CourseRepository extends CrudRepository<Course,Integer> {
   
	@Query(value = "select c from Course c where c.cname=:cname")
	List<Course> CourseByName(@Param("cname") String cname);

	@Query(value = "SELECT DISTINCT c.cname FROM Course c")
	List<String> CourseByDisc();
	
	
}
