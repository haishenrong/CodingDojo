package com.hsr.beltexam.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;
//Dummy class meant to take the shape of w/e comes.
@Entity
@Table(name="courses")
public class Course{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Size(min = 1, message="Title must not be blank.")
	private String name;
	@NotNull
	@Size(min = 1,  message="Author must not be blank.")
	private String weekday;
	
    @NotNull
    @Min(0)
    private Double price;
	
    @NotNull
    @DateTimeFormat(pattern="h:mm aa")
    private Date time;
    
	@NotNull
	@Size(min = 1,  message="Enter description")
	private String description;
	// This will not allow the createdAt column to be updated after creation
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "courses_students", 
        joinColumns = @JoinColumn(name = "course_id"), 
        inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    private List<Student> students;
	
	public Course() {
	}

	public Course(@NotNull @Size(min = 1, message = "Title must not be blank.") String name,
			@NotNull @Size(min = 1, message = "Author must not be blank.") String weekday,
			@NotNull @Min(0) Double price, @NotNull Date time,
			@NotNull @Size(min = 1, message = "Enter description") String description, User user) {
		super();
		this.name = name;
		this.weekday = weekday;
		this.price = price;
		this.time = time;
		this.description = description;
		this.user = user;
	}

	

	// other getters and setters removed for brevity
	@PrePersist
	protected void onCreate(){
	    this.createdAt = new Date();
	}
	@PreUpdate
	protected void onUpdate(){
	    this.updatedAt = new Date();
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getWeekday() {
		return weekday;
	}



	public void setWeekday(String weekday) {
		this.weekday = weekday;
	}



	public Double getPrice() {
		return price;
	}



	public void setPrice(Double price) {
		this.price = price;
	}



	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public Date getCreatedAt() {
		return createdAt;
	}



	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}



	public Date getUpdatedAt() {
		return updatedAt;
	}



	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}



	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}

}
