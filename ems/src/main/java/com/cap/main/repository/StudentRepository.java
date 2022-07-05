package com.cap.main.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.cap.main.entity.Course;
import com.cap.main.entity.Faculty;
import com.cap.main.entity.Student;

public interface StudentRepository extends CrudRepository<Student,Integer> {

	void save(Faculty fac);

	void save(Course crs);
	
	Student save(Student student);

	void deleteById(Student student);

	Optional<Student> findById(Student student);

	@Query(value = "select s from Student s where s.sname=:sname")
	List<Student> findByStudentName(@Param("sname") String sname);
	
	@Query(value = "select s from Student s where s.sgender=:sgender")
	List<Student> findByStudentGender(@Param("sgender") String sgender);
	
	
}
