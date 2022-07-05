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
import com.cap.main.entity.Faculty;
import com.cap.main.repository.CourseRepository;
import com.cap.main.repository.FacultyRepository;
import com.cap.main.service.CourseService;
import com.cap.main.service.FacultyService;

@RestController
@RequestMapping("/ems/")
public class FacultyController {

	@Autowired
	private FacultyRepository frepo;
	
	@Autowired
	private FacultyService fservice;
	
	
	@PostMapping("/insertfaculty")
	public ResponseEntity<String> insertProduct(@RequestBody Faculty faculty) {
		System.out.println("Faculty Inserted");
		frepo.save(faculty);
		return new ResponseEntity<String>("Success", HttpStatus.OK);

	}
	
	@GetMapping("/allfaculty")
	public List<Faculty> getAllFaculty(){
	   List<Faculty> list=fservice.findAllFaculty();
	   return list;
	}
	
	@DeleteMapping("/deletefaculty/{id}")
	public ResponseEntity<String> deleteFacultyById(@PathVariable("id")int id){
		frepo.deleteById(id);
		return new ResponseEntity<String>("Delete-successfully",HttpStatus.OK);
	}
	
	@GetMapping("getfaculty/{id}")
	public Faculty getFacultyDetails(@PathVariable("id") int id) {
		Optional<Faculty> op=frepo.findById(id);
		if(op.isPresent()) {
			Faculty fac=op.get();
			return fac;
		}
		else {
			return null;
		}
		
     }
	
	@PutMapping("/updatefaculty/{id}")
	public  ResponseEntity<Object> updateFacultyById(@PathVariable("id")int id,@RequestBody Faculty faculty){
		Optional<Faculty> op=frepo.findById(id);
		if(op.isPresent()) {
		 Faculty fac=op.get();
		 fac.setFname(faculty.getFname());
		 fac.setFemail(faculty.getFemail());
		 fac.setFphone(faculty.getFphone());
		 frepo.save(fac);
		 return new ResponseEntity<Object>(fac,HttpStatus.OK);
		}else {
			return new ResponseEntity<Object>("Not Found",HttpStatus.NOT_FOUND);
		}
		
	}
}
