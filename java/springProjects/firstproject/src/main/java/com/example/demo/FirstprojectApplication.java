package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
// 2. Importing dependencies
import org.springframework.web.bind.annotation.RequestMapping;
@SpringBootApplication
// 1. Annotation

@Controller
public class FirstprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstprojectApplication.class, args);
	}

    @RequestMapping("/")
    public String index(Model model) {
        model.addAttribute("dojoName", "Burbank");
        return "index.jsp";
    }
}
