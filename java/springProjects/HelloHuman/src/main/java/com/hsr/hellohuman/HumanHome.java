package com.hsr.hellohuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class HumanHome {
	@RequestMapping("/")
    public String index(@RequestParam(value="f_name", required=false) String firstName, @RequestParam(value="l_name", required=false) String lastName){
		if(firstName != null && lastName!=null)
			return "Hello "+firstName + " " +lastName;
		else if(firstName != null && lastName == null)
			return "Hello "+firstName;
		return "Hello Human!";
    }
}