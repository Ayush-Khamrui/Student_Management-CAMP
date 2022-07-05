package com.cap.main.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cap.main.entity.Course;
import com.cap.main.entity.Student;
import com.cap.main.repository.CourseRepository;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository crepo;

	public void saveCourse(Course crs) {
		// TODO Auto-generated method stub
		crepo.save(crs);
	}
	
	public List<Course> findAllCourses() {
		// TODO Auto-generated method stub
		List<Course> list=new ArrayList<Course>();
		crepo.findAll().forEach(list::add);
		return list;
	}

	public void deleteById(int id) {
		// TODO Auto-generated method stub
		crepo.deleteById(id);	
	}
	
	public List<String> findCourseByDisc(){
		return  crepo.CourseByDisc();
    }

}
