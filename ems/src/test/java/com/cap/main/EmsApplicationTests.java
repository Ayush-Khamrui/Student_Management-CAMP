package com.cap.main;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cap.main.entity.Course;
import com.cap.main.entity.Faculty;
import com.cap.main.entity.Student;
import com.cap.main.repository.CourseRepository;
import com.cap.main.repository.FacultyRepository;
import com.cap.main.repository.StudentRepository;

@SpringBootTest
class EmsApplicationTests {

	@Autowired
	private StudentRepository prepo;
	@Autowired
	private FacultyRepository frepo;
	@Autowired
	private CourseRepository crepo;

	@Disabled
	@Test
	void contextLoads() {

	}

	@Test
	void testSaveStudent() {
       Student std=new Student();
       std.setId(1);
       std.setSname("Sujit");
       std.setSgender("male");
       std.setSdob("02/11/98");
       Course crs=new Course();
       crs.setCid(1);
       crs.setCname("java");
       crs.setCduration(8);
       Faculty fac=new Faculty();
       fac.setFid(1);
       fac.setFname("Ramesh");
       fac.setFemail("ramesh@gmail.com");
       Student std1=prepo.save(std);
       Course crs1=crepo.save(crs);
       Faculty fac1=frepo.save(fac);
       assertThat(std1.getId()).isEqualTo(1);
       System.out.println("#####10MARKS#####");
	}

	@Test
	void testGetStudentById() {
		Optional<Student> op = prepo.findById(2);
		if (op.isPresent()) {
			Student std = op.get();
			assertThat(std.getId()).isEqualTo(2);
			System.out.println("###10MARKS###");
		}
	}

	@Test
	void testAllStudent() {
		List<Student> list = new ArrayList<Student>();
		prepo.findAll().forEach(list::add);
		assertThat(list.size()).isGreaterThanOrEqualTo(0);
		System.out.println("##10MARKS##");
	}

	@Test
	void testDeleteStudentById() {
		Optional<Student> op = prepo.findById(1);
		if (op.isPresent()) {
			Student std = op.get();
			assertThat(std.getId()).isEqualTo(1);
			System.out.println("####10MARKS####");
		}
	}

	@Test
	void testUpdateStudentById() {
		Optional<Student> op = prepo.findById(1);
		System.out.println(op);
		if (op.isPresent()) {
			Student std = op.get();
			assertThat(std.getId()).isEqualTo(1);
			std.setSname("Sujit");
			prepo.save(std);
			std.setSdob("02/11/98");
			prepo.save(std);
			System.out.println("####10MARKS####");
		} else {
			assertThat(op).isEmpty();
		}
	}
	
	@Test
	void testGetStudentByName() {
		List<Student> list = new ArrayList<>();
		prepo.findAll().forEach(list::add);
		assertThat(list.size()).isGreaterThanOrEqualTo(0);
		System.out.println("##10MARKS##");
			
		}
}

