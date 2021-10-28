package com.hsr.beltexam.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hsr.beltexam.models.Course;
import com.hsr.beltexam.models.Student;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {
	List<Course> findAll();
	List<Course> findAllByStudents(Student student);
	List<Course> findByStudentsNotContains(Student student);
}
