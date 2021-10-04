package com.hsr.omikuji.controllers;

import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/omikuji")
public class OmikujiController {
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@PostMapping("/fortune")
	public String fortune( HttpSession session,
			@RequestParam(value="year") Integer year,
			@RequestParam(value="city") String city,
			@RequestParam(value="person") String person,
			@RequestParam(value="hobby") String hobby,
			@RequestParam(value="thing") String thing,
			@RequestParam(value="nice") String nice) {
		session.setAttribute("year", year);
		session.setAttribute("city", city);
		session.setAttribute("person", person);
		session.setAttribute("hobby", hobby);
		session.setAttribute("thing", thing);
		session.setAttribute("nice", nice);

		return "redirect:/omikuji/show";
	}
	
	@RequestMapping("/show")
	public String telling(HttpSession session, Model model) {
		model.addAttribute("year", session.getAttribute("year"));
		model.addAttribute("city", session.getAttribute("city"));
		model.addAttribute("person", session.getAttribute("person"));
		model.addAttribute("hobby", session.getAttribute("hobby"));
		model.addAttribute("thing", session.getAttribute("thing"));
		model.addAttribute("nice", session.getAttribute("nice"));
		return "telling.jsp";
	}
}
