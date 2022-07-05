package com.cap.main.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.cap.main.entity.Student;
import com.cap.main.exception.InvalidUserException;
import com.cap.main.service.CourseService;
import com.cap.main.service.StudentService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/ems/")
public class StudentController{

	@Autowired
	private StudentService eservice;
	
	
	 
	
	@PostMapping("save")
	public ResponseEntity<String> saveStudent(@RequestBody @Valid Student student){
		System.out.println(student);
		Course crs=student.getCid();
		eservice.saveCourse(crs);
		Faculty fac=student.getFid();
		eservice.saveFaculty(fac);
		Student std=eservice.saveStudent(student);
		System.out.println(std);
		
		return new ResponseEntity<String>("SUCCESSFULLY STORED",HttpStatus.CREATED);
	}
	
	
	
	@DeleteMapping("/deletestudent/{id}")
	public ResponseEntity<String> deleteStudentById(@PathVariable("id")int id){
		eservice.deleteById(id);
		return new ResponseEntity<String>("Delete-successfully",HttpStatus.OK);
	}
	
	@GetMapping("getstudent/{id}")
	public Student getStudentDetails(@PathVariable("id") int id)throws InvalidUserException {
		Student student=eservice.findById(id);
		return student;	
     }
	
	@GetMapping("/allstudent")
	public List<Student> getAllStudents(){
	   List<Student> list=eservice.findAllStudent();
	   return list;
	}
	
	@PutMapping("/updatestudent/{id}")
	public  ResponseEntity<Object> updateProductById(@PathVariable("id")int id,@RequestBody Student student){
		Optional<Student> op=eservice.updateById(id);
		if(op.isPresent()) {
		 Student std=op.get();
		 std.setSname(student.getSname());
		 std.setSgender(student.getSgender());
		 std.setSemail(student.getSemail());
		 std.setSdob(student.getSdob());
		 std.getCid().setCname(student.getCid().getCname());
		 std.getCid().setCduration(student.getCid().getCduration());
		 std.getFid().setFname(student.getFid().getFname());
		 std.getFid().setFemail(student.getFid().getFemail());
		 std.getFid().setFphone(student.getFid().getFphone());
		 eservice.save(std);
		 return new ResponseEntity<Object>(std,HttpStatus.OK);
		}else {
			return new ResponseEntity<Object>("Not Found",HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("/getstudentbyname/{sname}")
	public List<Student> findByStudentName(@PathVariable("sname") String sname){
		return  eservice.findByName(sname);
    }
	
	@GetMapping("/getfacultybyname/{fname}")
	public List<Faculty> findByFacultytName(@PathVariable("fname") String fname){
		return  eservice.FacultyByName(fname);
    }
	
	@GetMapping("/getcoursebyname/{cname}")
	public List<Course> findCourseByName(@PathVariable("cname") String cname){
		return  eservice.CourseByName(cname);
    }
	
	@GetMapping("/getstudentbygender/{sgender}")
	public List<Student> findByStudentGender(@PathVariable("sgender") String sgender){
		return  eservice.findByGender(sgender);
    }
	
	
}
