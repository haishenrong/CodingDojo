package com.hsr.beltexam.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.hsr.beltexam.models.Course;
import com.hsr.beltexam.models.Student;
import com.hsr.beltexam.models.User;
import com.hsr.beltexam.services.CourseService;
import com.hsr.beltexam.services.CourseStudentService;
import com.hsr.beltexam.services.UserService;

@Controller
public class CourseController {
    private final CourseService courseService;
    private final UserService userService;
    private final CourseStudentService cSService;
    
    @Autowired
    public CourseController(CourseService courseService, UserService userService, CourseStudentService csService) {
        this.courseService = courseService;
        this.userService = userService;
        this.cSService = csService;
    }
    
	@RequestMapping("/home")
	public String index(Model model, HttpSession session) {
		if(session.getAttribute("user_id") == null)
			return "redirect:/";
		Long userId = (Long) session.getAttribute("user_id");
		User user = userService.findUser(userId);
		List<Course> courses = courseService.allCourses();
		model.addAttribute("user", user);
		model.addAttribute("courses", courses);
		return "home.jsp";
	}
	
	@RequestMapping("courses/{id}")
	public String single(Model model, @ModelAttribute("student") Student student, HttpSession session, @PathVariable("id") Long id) {
		if(session.getAttribute("user_id") == null)
			return "redirect:/";
		Course course = courseService.findCourse(id);
		model.addAttribute("course", course);
		Long userId = (Long) session.getAttribute("user_id");
		User user = userService.findUser(userId);
		model.addAttribute("user", user);
		List<Student> contains = cSService.studentsBelongTo(course);
		List<Student> notContains = cSService.studentsNotBelongTo(course);
		model.addAttribute("contains", contains);
		model.addAttribute("notContains", notContains);
		return course == null ? "none.jsp": "course.jsp";
	}
	
	@RequestMapping(value="/course/connect/{id}", method=RequestMethod.POST)
	public String link(@RequestParam("id") Long studentId, @PathVariable("id") Long courseId) {
		cSService.addRelation(courseId, studentId);
		return "redirect:/courses/"+ courseId;
	}
	
	@RequestMapping(value="/course/add/{id}", method=RequestMethod.POST)
	public String addStudent(@Valid @ModelAttribute("student") Student student, BindingResult result, Model model, HttpSession session, @PathVariable("id") Long courseId) {
		if (result.hasErrors()) {
			Course course = courseService.findCourse(courseId);
			model.addAttribute("course", course);
			Long userId = (Long) session.getAttribute("user_id");
			User user = userService.findUser(userId);
			model.addAttribute("user", user);
			List<Student> contains = cSService.studentsBelongTo(course);
			List<Student> notContains = cSService.studentsNotBelongTo(course);
			model.addAttribute("contains", contains);
			model.addAttribute("notContains", notContains);
            return "course.jsp";
        } else {
        	student.setId(null);
    		Student newStudent = cSService.createStudent(student);
    		cSService.addRelation(courseId, newStudent.getId());
    		return "redirect:/courses/"+ courseId;
        }
	}
	@RequestMapping("/courses/new")
    public String newBook(@ModelAttribute("course") Course course, Model model, HttpSession session) {
		if(session.getAttribute("user_id") == null)
			return "redirect:/";
		Long userId = (Long) session.getAttribute("user_id");
		User user = userService.findUser(userId);
		model.addAttribute("user", user);
        return "newCourse.jsp";
    }
	
	@RequestMapping(value="/courses", method=RequestMethod.POST)
	public String create(@Valid @ModelAttribute("course") Course course, BindingResult result) {
	    if (result.hasErrors()) {
	        return "newCourse.jsp";
	    } else {
	        courseService.createCourse(course);
	        return "redirect:/home";
	    }
	}
	
	@RequestMapping("/edit/{id}")
    public String edit(HttpSession session, @PathVariable("id") Long id, Model model) {
		if(session.getAttribute("user_id") == null)
			return "redirect:/";
		Long userId = (Long) session.getAttribute("user_id");
		User user = userService.findUser(userId);
		model.addAttribute("user", user);
        Course course = courseService.findCourse(id);
        model.addAttribute("course", course);
        return "edit.jsp";
    }
    @RequestMapping(value="/courses/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("course") Course course, BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            courseService.updateCourse(course);
            return "redirect:/home/";
        }
    }
    
    @RequestMapping(value="/courses/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
        courseService.deleteCourse(id);
        return "redirect:/home";
    }
	
}