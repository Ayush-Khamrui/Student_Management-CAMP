package com.cap.main.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity
public class Faculty {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@NotEmpty(message = "Faculty Name Should  Not Be Empty!")
	private String fname;
	@NotEmpty(message = "Faculty Email Should  Not Be Empty!")
	private String femail;
	private long fphone;
	
	public Faculty() {
		super();
	}

	public Faculty(String fname, String femail, long fphone) {
		super();
		this.fname = fname;
		this.femail = femail;
		this.fphone = fphone;
	}

	public int getFid() {
		return id;
	}

	public void setFid(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getFemail() {
		return femail;
	}

	public void setFemail(String femail) {
		this.femail = femail;
	}

	public long getFphone() {
		return fphone;
	}

	public void setFphone(long fphone) {
		this.fphone = fphone;
	}

	@Override
	public String toString() {
		return "Faculty [fid=" + id + ", fname=" + fname + ", femail=" + femail + ", fphone=" + fphone + "]";
	}
	
	
}
