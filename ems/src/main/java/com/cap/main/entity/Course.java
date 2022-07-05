package com.cap.main.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;


@Entity
public class Course {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String cname;
	private int cduration;
	
	public Course() {
		super();
	}

	public Course(String cname, int cduration) {
		super();
		this.cname = cname;
		this.cduration = cduration;
	}

	public int getCid() {
		return id;
	}

	public void setCid(int cid) {
		this.id = cid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public int getCduration() {
		return cduration;
	}

	public void setCduration(int cduration) {
		this.cduration = cduration;
	}

	@Override
	public String toString() {
		return "Course [cid=" + id + ", cname=" + cname + ", cduration=" + cduration + "]";
	}
	
	
}
