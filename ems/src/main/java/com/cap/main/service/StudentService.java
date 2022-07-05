package com.cap.main.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.cap.main.entity.Course;
import com.cap.main.entity.Faculty;
import com.cap.main.entity.Student;
import com.cap.main.exception.InvalidUserException;
import com.cap.main.repository.CourseRepository;
import com.cap.main.repository.FacultyRepository;
import com.cap.main.repository.StudentRepository;

@Service
public class StudentService {
	
   @Autowired
   private StudentRepository erepo;
   @Autowired
   private FacultyRepository frepo;
   @Autowired
   private CourseRepository crepo;

	public void saveCourse(Course crs) {
		// TODO Auto-generated method stub
		erepo.save(crs);
	}

	public void saveFaculty(Faculty fac) {
		// TODO Auto-generated method stub
		erepo.save(fac);
	}

	public Student saveStudent(Student student) {
		// TODO Auto-generated method stub
		erepo.save(student);
		return student;
	}

	public void deleteById(int id) {
		// TODO Auto-generated method stub
	    erepo.deleteById(id);
	    frepo.deleteById(id);
	    crepo.deleteById(id);
	}

	public Student findById(int id) throws InvalidUserException{
		// TODO Auto-generated method stub
		Optional<Student> op=erepo.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
	   throw new InvalidUserException("User not found");
	}
	
	public Optional<Student> updateById(int id){
		return erepo.findById(id);
	}

	public List<Student> findAllStudent() {
		// TODO Auto-generated method stub
		List<Student> list=new ArrayList<Student>();
		erepo.findAll().forEach(list::add);
		return list;
	}

	public void save(Student std) {
		// TODO Auto-generated method stub
		erepo.save(std);
	}

	public List<Student> findByName(String sname) {
		// TODO Auto-generated method stub
		return erepo.findByStudentName(sname);
	}

	public List<Faculty> FacultyByName(String fname) {
		// TODO Auto-generated method stub
		return frepo.findByFacultyName(fname);
	}
	
	public List<Course> CourseByName(String cname) {
		// TODO Auto-generated method stub
		return crepo.CourseByName(cname);
	}
	
	public List<Student> findByGender(String sgender) {
		// TODO Auto-generated method stub
		return erepo.findByStudentGender(sgender);
	}
	
}
