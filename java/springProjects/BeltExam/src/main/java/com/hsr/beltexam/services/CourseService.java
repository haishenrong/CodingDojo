package com.hsr.beltexam.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hsr.beltexam.models.Course;
import com.hsr.beltexam.repositories.CourseRepository;

@Service
public class CourseService {
    private final CourseRepository courseRepository;
    
    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> allCourses() {
        return courseRepository.findAll();
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course findCourse(Long id) {
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if(optionalCourse.isPresent()) {
            return optionalCourse.get();
        } else {
            return null;
        }
    }
    /*
    public Item updateItem(Long id, String title, String author, String thoughts,User user) {
    	Item item = new Item(title, author, thoughts, user);
    	item.setId(id);
    	return itemRepository.save(item);
    }
    */
    public Course updateCourse(Course course) {
    	return courseRepository.save(course);
    }
    public void deleteCourse(Long id) {
    	courseRepository.deleteById(id);
    }
}
