package com.hsr.beltexam.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.hsr.beltexam.models.Course;
import com.hsr.beltexam.models.Student;
import com.hsr.beltexam.repositories.CourseRepository;
import com.hsr.beltexam.repositories.StudentRepository;

@Service
public class CourseStudentService {
	private final StudentRepository studentRepository;
	private final CourseRepository courseRepository;
	
	public CourseStudentService(StudentRepository studentRepository, CourseRepository courseRepository) {
		this.studentRepository = studentRepository;
		this.courseRepository = courseRepository;
	}
	
	public List<Student> allStudents() {
		return studentRepository.findAll();
	}
	
	public List<Student> studentsBelongTo(Course course){
		return studentRepository.findAllByCourses(course);
	}
	
	public List<Student> studentsNotBelongTo(Course course){
		return studentRepository.findByCoursesNotContains(course);
	}
	
	public Student createStudent(Student student) {
		return studentRepository.save(student);
	}
	
	public Student findStudentById(Long id) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if(optionalStudent.isPresent()) {
            return optionalStudent.get();
        } else {
            return null;
        }
    }
	
	public Course findCourseById(Long id) {
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if(optionalCourse.isPresent()) {
            return optionalCourse.get();
        } else {
            return null;
        }
    }
	
	public void addRelation(Long courseId,Long studentId) {
	    // retrieve an instance of a course using another method in the service.
		Course thisCourse = findCourseById(courseId);
	    // retrieve an instance of a student using another method in the service.
	    Student thisStudent = findStudentById(studentId);
	    // add the student to this course's list of products
	    thisCourse.getStudents().add(thisStudent);
	    // Save thisCourse, since you made changes to its student list.
	    courseRepository.save(thisCourse);	
	}
}
