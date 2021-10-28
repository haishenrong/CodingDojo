package com.hsr.beltexam.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hsr.beltexam.models.Course;
import com.hsr.beltexam.models.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Long> {
	List<Student> findAllByCourses(Course course);
	List<Student> findAll();
	List<Student> findByCoursesNotContains(Course course);
}
