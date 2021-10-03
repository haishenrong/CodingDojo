package com.hsr.counter.controllers;

//... package and other imports you may have
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class MainController {
	@RequestMapping("/")
	public String index(HttpSession session){
        if (session.getAttribute("count") == null) {
        	session.setAttribute("count", 1);
        }
        else {
        	session.setAttribute("count", (int)session.getAttribute("count")+1);
        }
        return "index.jsp";
	}
	
	@RequestMapping("/counter")
	public String index(HttpSession session, Model model){
		model.addAttribute("count", (int)session.getAttribute("count"));
        if (session.getAttribute("count") == null) {
        	session.setAttribute("count", 0);
        }
		return "counter.jsp";
	}
}
//...

