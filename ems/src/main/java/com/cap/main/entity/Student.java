package com.cap.main.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;


@Entity
public class Student {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@NotEmpty(message = "Student Name Should  Not Be Empty!")
	private String sname;
	@NotEmpty(message = "Student Gender Should  Not Be Empty!")
	private String sgender;
	private String semail;
	private String sdob;
	
	
	@ManyToOne
	private Course cid;
	
	@ManyToOne
	private Faculty fid;
	
	public Student() {
		super();
	}

	

	public Student(String sname, String sgender, String semail, String sdob,Course cid, Faculty fid) {
		super();
		this.sname = sname;
		this.sgender = sgender;
		this.semail = semail;
		this.sdob = sdob;
		this.cid = cid;
		this.fid = fid;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getSname() {
		return sname;
	}



	public void setSname(String sname) {
		this.sname = sname;
	}



	public String getSgender() {
		return sgender;
	}



	public void setSgender(String sgender) {
		this.sgender = sgender;
	}



	public String getSemail() {
		return semail;
	}



	public void setSemail(String semail) {
		this.semail = semail;
	}



	public String getSdob() {
		return sdob;
	}



	public void setSdob(String sdob) {
		this.sdob = sdob;
	}



	public Course getCid() {
		return cid;
	}



	public void setCid(Course cid) {
		this.cid = cid;
	}



	public Faculty getFid() {
		return fid;
	}



	public void setFid(Faculty fid) {
		this.fid = fid;
	}



	@Override
	public String toString() {
		return "Student [id=" + id + ", sname=" + sname + ", sgender=" + sgender + ", semail=" + semail + ", sdob="
				+ sdob + ", cid=" + cid + ", fid=" + fid + "]";
	}	
	
}
