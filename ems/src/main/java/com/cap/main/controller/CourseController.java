package com.cap.main.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cap.main.entity.Course;
import com.cap.main.repository.CourseRepository;
import com.cap.main.service.CourseService;

@RestController
@RequestMapping("/ems/")
public class CourseController {

	@Autowired
	private CourseRepository crepo;
	
	@Autowired
	private CourseService cservice;
	
	
	@PostMapping("/insertcourse")
	public ResponseEntity<String> insertProduct(@RequestBody Course course) {
		System.out.println("course Inserted");
		crepo.save(course);
		return new ResponseEntity<String>("Success", HttpStatus.OK);

	}
	
	@GetMapping("/allcourse")
	public List<Course> getAllCourses(){
	   List<Course> list=cservice.findAllCourses();
	   return list;
	}
	
	@DeleteMapping("/deletecourse/{id}")
	public ResponseEntity<String> deletestudentById(@PathVariable("id")int id){
		crepo.deleteById(id);
		return new ResponseEntity<String>("Delete-successfully",HttpStatus.OK);
	}
	
	@GetMapping("getcourse/{id}")
	public Course getCourseDetails(@PathVariable("id") int id) {
		Optional<Course> op=crepo.findById(id);
		if(op.isPresent()) {
			Course crs=op.get();
			return crs;
		}
		else {
			return null;
		}
		
     }
	
	@PutMapping("/updatecourse/{id}")
	public  ResponseEntity<Object> updateProductById(@PathVariable("id")int id,@RequestBody Course course){
		Optional<Course> op=crepo.findById(id);
		if(op.isPresent()) {
		 Course crs=op.get();
		 crs.setCname(course.getCname());
		 crs.setCduration(course.getCduration());
		 crepo.save(crs);
		 return new ResponseEntity<Object>(crs,HttpStatus.OK);
		}else {
			return new ResponseEntity<Object>("Not Found",HttpStatus.NOT_FOUND);
		}
		
	}
	@GetMapping("/getcoursebydisc")
	public List<String> getCourseByDisc() {
		List<String> list = cservice.findCourseByDisc();
		return list;
	}
}
