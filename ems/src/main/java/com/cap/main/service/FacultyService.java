package com.cap.main.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cap.main.entity.Course;
import com.cap.main.entity.Faculty;
import com.cap.main.repository.CourseRepository;
import com.cap.main.repository.FacultyRepository;

@Service
public class FacultyService {

	@Autowired
	private FacultyRepository frepo;
	
	public void saveFaculty(Faculty fac) {
		// TODO Auto-generated method stub
		frepo.save(fac);
	}
	
	public List<Faculty> findAllFaculty() {
		// TODO Auto-generated method stub
		List<Faculty> list=new ArrayList<Faculty>();
		frepo.findAll().forEach(list::add);
		return list;
	}
}
